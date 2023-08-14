import React, {useEffect} from 'react';
import styles from '../orders-stats/order-stats.module.css'
import {useSelector} from "react-redux";

function OrderStats() {
    const ordersTotal = useSelector(store => store.ws.total)
    const ordersToday = useSelector(store => store.ws.totalToday)
    const orders = useSelector(store => store.ws.orders);
    const doneOrdersIds = orders.filter(order => order.status === 'done').map(order => order.number)
    const createdOrderIds = orders.filter(order => order.status === 'created').map(order => order.number)
    return (
        <div className={styles.stats}>
            <div className={styles.currentOrders}>
                <div className={`${styles.ready}`}>
                    <p className="text text_type_main-medium pb-6">Готовы:</p>
                    <ul className={`${styles.list} ${styles.grid} text text_type_digits-default`}>
                        {doneOrdersIds.slice(0, 10).map((orderId, index) => (
                            <li key={index}>{orderId}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.inProgress}>
                    <p className="text text_type_main-medium pb-6">В работе:</p>
                    <ul className={`${styles.list} ${styles.grid} text text_type_digits-default`}>
                        {createdOrderIds.slice(0, 10).map((orderId, index) => (
                            <li key={index}>{orderId}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <p className="text text_type_main-medium pb-6">Выполнено за всё время:</p>
                <p className={`${styles.shadow} text text_type_digits-large`}>{ordersTotal}</p>
            </div>
            <div>
                <p className="text text_type_main-medium pb-6">Выполнено за сегодня:</p>
                <p className={`${styles.shadow} text text_type_digits-large`}>{ordersToday}</p>
            </div>
        </div>
    );
}

export default OrderStats;