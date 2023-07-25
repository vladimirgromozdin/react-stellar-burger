import React from "react";
import styles from "../order-details/order-details.module.css";
import doneIconPath from "../../images/done.png"
import {useSelector} from "react-redux";

function OrderDetails() {
    const orderId = useSelector(store => store.orderDetails.orderId)

    return (<div className={`${styles.content} pt-10 pr-10 pl-10 pb-4`}>
        <h4 className="text text_type_digits-large pt-30 pb-8">{orderId}</h4>
        <p className="text text_type_main-medium pb-15">идентификатор заказа</p>
        <img src={doneIconPath} className="pb-15"/>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной
            станции</p>
    </div>)
}


export default OrderDetails