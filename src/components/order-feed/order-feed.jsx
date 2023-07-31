import React from 'react';
import styles from '../order-feed/order-feed.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderFeed({  feedPersonal }) {
    const className = feedPersonal ? styles.feedPersonal : styles.feedGeneral
    // Apply the styling to the order feed based on the props
    return (<div className={`${className} custom-scroll`}>
        <div className={styles.orderCard}>
            <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
                <div className={styles.orderVisualisation}>
                    <div className={styles.orderIngredients}>
                        <ul className={styles.ingredientsList}>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-01-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'
                                                                         alt='img'/></li>
                        </ul>
                    </div>
                    <div className={styles.orderCost}>
                        <p className="text text_type_digits-default pr-2">120</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.orderCard}>
            <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
                <div className={styles.orderVisualisation}>
                    <div className={styles.orderIngredients}>
                        <ul className={styles.ingredientsList}>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-01-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'
                                                                         alt='img'/></li>
                        </ul>
                    </div>
                    <div className={styles.orderCost}>
                        <p className="text text_type_digits-default pr-2">120</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.orderCard}>
            <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
                <div className={styles.orderVisualisation}>
                    <div className={styles.orderIngredients}>
                        <ul className={styles.ingredientsList}>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-01-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'
                                                                         alt='img'/></li>
                        </ul>
                    </div>
                    <div className={styles.orderCost}>
                        <p className="text text_type_digits-default pr-2">120</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.orderCard}>
            <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
                <div className={styles.orderVisualisation}>
                    <div className={styles.orderIngredients}>
                        <ul className={styles.ingredientsList}>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-01-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'
                                                                         alt='img'/></li>
                        </ul>
                    </div>
                    <div className={styles.orderCost}>
                        <p className="text text_type_digits-default pr-2">120</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.orderCard}>
            <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
                <div className={styles.orderVisualisation}>
                    <div className={styles.orderIngredients}>
                        <ul className={styles.ingredientsList}>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-01-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'
                                                                         alt='img'/></li>
                        </ul>
                    </div>
                    <div className={styles.orderCost}>
                        <p className="text text_type_digits-default pr-2">120</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.orderCard}>
            <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
                <div className={styles.orderVisualisation}>
                    <div className={styles.orderIngredients}>
                        <ul className={styles.ingredientsList}>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-01-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'
                                                                         alt='img'/></li>
                        </ul>
                    </div>
                    <div className={styles.orderCost}>
                        <p className="text text_type_digits-default pr-2">120</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.orderCard}>
            <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                    <p className="text text_type_digits-default">#034535</p>
                    <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
                <div className={styles.orderVisualisation}>
                    <div className={styles.orderIngredients}>
                        <ul className={styles.ingredientsList}>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-01-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                                                                         alt='img'/></li>
                            <li className={styles.ingredientBorder}><img className={styles.ingredient}
                                                                         src='https://code.s3.yandex.net/react/code/meat-02-mobile.png'
                                                                         alt='img'/></li>
                        </ul>
                    </div>
                    <div className={styles.orderCost}>
                        <p className="text text_type_digits-default pr-2">120</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default OrderFeed;