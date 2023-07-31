import React from 'react';
import styles from '../order-description/order-description.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderDescription(props) {
    return (
        <div className={styles.orderContainer}>
            <p className={` ${styles.orderNumber} text text_type_digits-default pb-10`}>#034533</p>
            <h2 className='text text_type_main-medium pb-3'>Black Hole Singularity острый бургер</h2>
            <p className={` ${styles.orderStatus} text text_type_main-default pb-15`}>Выполнен</p>
            <p className='text text_type_main-medium pb-6'>Состав:</p>
            <ul className={`${styles.ingredientsList} custom-scroll`}>
                <li className={styles.ingredient}>
                    <div className={styles.ingredientWrapper}>
                        <div className={styles.ingredientBorder}>
                            <img className={styles.ingredientImage}
                                 src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                 alt='img'/>
                        </div>
                        <p className={`${styles.ingredientName} text text_type_main-default pl-4`}>Флуоресцентная булка</p>
                    </div>
                    <div className={styles.ingredientPrice}>
                        <p className="text text_type_digits-default pr-2">20</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </li>
                <li className={styles.ingredient}>
                    <div className={styles.ingredientWrapper}>
                        <div className={styles.ingredientBorder}>
                            <img className={styles.ingredientImage}
                                 src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                 alt='img'/>
                        </div>
                        <p className={`${styles.ingredientName} text text_type_main-default pl-4`}>Флуоресцентная булка</p>
                    </div>
                    <div className={styles.ingredientPrice}>
                        <p className="text text_type_digits-default pr-2">20</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </li>
                <li className={styles.ingredient}>
                    <div className={styles.ingredientWrapper}>
                        <div className={styles.ingredientBorder}>
                            <img className={styles.ingredientImage}
                                 src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                 alt='img'/>
                        </div>
                        <p className={`${styles.ingredientName} text text_type_main-default pl-4`}>Флуоресцентная булка</p>
                    </div>
                    <div className={styles.ingredientPrice}>
                        <p className="text text_type_digits-default pr-2">20</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </li>
                <li className={styles.ingredient}>
                    <div className={styles.ingredientWrapper}>
                        <div className={styles.ingredientBorder}>
                            <img className={styles.ingredientImage}
                                 src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                 alt='img'/>
                        </div>
                        <p className={`${styles.ingredientName} text text_type_main-default pl-4`}>Флуоресцентная булка</p>
                    </div>
                    <div className={styles.ingredientPrice}>
                        <p className="text text_type_digits-default pr-2">20</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </li>
                <li className={styles.ingredient}>
                    <div className={styles.ingredientWrapper}>
                        <div className={styles.ingredientBorder}>
                            <img className={styles.ingredientImage}
                                 src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                 alt='img'/>
                        </div>
                        <p className={`${styles.ingredientName} text text_type_main-default pl-4`}>Флуоресцентная булка</p>
                    </div>
                    <div className={styles.ingredientPrice}>
                        <p className="text text_type_digits-default pr-2">20</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </li>
                <li className={styles.ingredient}>
                    <div className={styles.ingredientWrapper}>
                        <div className={styles.ingredientBorder}>
                            <img className={styles.ingredientImage}
                                 src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                                 alt='img'/>
                        </div>
                        <p className={`${styles.ingredientName} text text_type_main-default pl-4`}>Флуоресцентная булка</p>
                    </div>
                    <div className={styles.ingredientPrice}>
                        <p className="text text_type_digits-default pr-2">20</p>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default OrderDescription;