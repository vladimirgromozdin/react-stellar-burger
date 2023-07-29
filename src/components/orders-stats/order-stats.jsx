import React from 'react';
import styles from '../orders-stats/order-stats.module.css'

function OrderStats() {
    return (
        <div className={styles.stats}>
            <div className={styles.currentOrders}>
                <div className={styles.ready}>
                    <p className="text text_type_main-medium pb-6">Готовы:</p>
                    <ul className={`${styles.list} text text_type_digits-default`}>
                        <li>034533</li>
                        <li>034533</li>
                        <li>034533</li>
                        <li>034533</li>
                        <li>034533</li>
                    </ul>
                </div>
                <div className={styles.inProgress}>
                    <p className="text text_type_main-medium pb-6">В работе:</p>
                    <ul className={`${styles.list} text text_type_digits-default`}>
                        <li>034533</li>
                        <li>034533</li>
                        <li>034533</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="text text_type_main-medium pb-6">Выполнено за всё время:</p>
                <p className={`${styles.shadow} text text_type_digits-large`}>28752</p>
            </div>
            <div>
                <p className="text text_type_main-medium pb-6">Выполнено за сегодня:</p>
                <p className={`${styles.shadow} text text_type_digits-large`}>138</p>
            </div>
        </div>
    );
}

export default OrderStats;