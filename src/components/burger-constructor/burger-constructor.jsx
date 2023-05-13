import React from "react";
import styles from "../burger-constructor/burger-constructor.module.css";
import {DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
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
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                        />
                    </li>
                    <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                        <div className="pr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
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
                <Button htmlType={"button"} type={"primary"} size={"medium"}>Оформить заказ</Button>
            </div>
        </div>
    );
}

export default BurgerConstructor;