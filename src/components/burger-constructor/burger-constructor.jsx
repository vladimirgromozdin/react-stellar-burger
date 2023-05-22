import React, {useEffect, useState} from "react";
import {DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styles from "../burger-constructor/burger-constructor.module.css";

function BurgerConstructor() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOrderClick = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={`${styles.burgerConstructor} pt-25`}>
            <ul className={styles.ingredientsList}>
                <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                </li>
                <div className={`${styles.variableIngredientsList} custom-scroll`}>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={3000}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={424}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Мясо бессмертных моллюсков Protostomia"
                            price={1337}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={3000}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={424}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная буСоус Spicy-X"
                            price={90}
                            thumbnail="https://code.s3.yandex.net/react/code/sauce-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={3000}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={424}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Мясо бессмертных моллюсков Protostomia"
                            price={1337}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
                        />
                    </li>
                </div>
                <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                </li>
            </ul>
            <div className={`${styles.total} pt-8`}>
                <div className={`${styles.price} pr-10`}>
                    <h4 className="text text_type_digits-medium pr-2">610</h4>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <Button htmlType={"button"} type={"primary"} size={"medium"} onClick={handleOrderClick}>Оформить
                    заказ</Button>
                {isModalOpen && (
                    <Modal onClose={handleModalClose}>
                        <OrderDetails onClose={handleModalClose} />
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default BurgerConstructor;
