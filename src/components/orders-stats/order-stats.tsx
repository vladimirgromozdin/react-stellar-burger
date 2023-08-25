import React from 'react';
import styles from '../orders-stats/order-stats.module.css'
import {useSelector} from "react-redux";
import {IOrder} from "../../services/types";

function OrderStats() {
    const ordersTotal = useSelector((store: any) => store.ws.total)
    const ordersToday = useSelector((store: any) => store.ws.totalToday)
    const orders = useSelector((store: any) => store.ws.orders);
    const doneOrdersIds: number[] = orders.filter((order: IOrder) => order.status === 'done').map((order: IOrder) => order.number)
    const createdOrderIds: number[] = orders.filter((order: IOrder) => order.status === 'created').map((order: IOrder) => order.number)
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