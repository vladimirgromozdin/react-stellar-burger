import {useDrag, useDrop} from "react-dnd";
import styles from "../burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useEffect, useRef} from "react";
import {removeIngredientFromConstructor, reorderIngredient} from "../../../services/actions/burgerConstructor";
import {useDispatch, useSelector} from "react-redux";

function DraggableIngredient({ingredient, index}) {
    // Use removeIcon ref because it matches the draggable element
    const dispatch = useDispatch();
    const constructorIngredients = useSelector(store => store.burgerConstructor.constructorIngredients)
    // Add event listener to the remove constructor ingredient button
    const removeIconRef = useRef(null)
    const [, drag] = useDrag({
        type: 'ingredient',
        item: {ingredient, index}
    });
    const [, drop] = useDrop({
        accept: 'ingredient',
        hover(item) {
            if (item.index !== index) {
                dispatch(reorderIngredient(item.index, index));
                item.index = index;
            }
        }
    });
    useEffect(() => {
        const handleRemoveClick = (event) => {
            const uniqueId = event.target.closest('[data-unique-id]').dataset.uniqueId
            dispatch(removeIngredientFromConstructor(uniqueId))
        };

        // TODO Look up how it actually works
        drag(removeIconRef);
        const wrapper = removeIconRef.current;
        const removeIcon = wrapper && wrapper.querySelector('.constructor-element__action')
        if (removeIcon) {
            removeIcon.addEventListener('click', handleRemoveClick);
        }
    }, [constructorIngredients, dispatch])
    return (<li ref={removeIconRef}
                className={`${styles.ingredient} removable-ingredient pt-2 pr-2 pb-2 pl-4`}
                key={ingredient.uniqueId}
                data-unique-id={ingredient.uniqueId}>
        <div className="pr-2">
            <DragIcon type={"primary"}/>
        </div>
        <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
        />
    </li>)
}

export default DraggableIngredient