import React from "react";
import styles from "../order-details/order-details.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import doneIconPath from "../../images/done.png"
import {orderDetailsPropType} from "../../utils/prop-types";
import {useSelector} from "react-redux";

function OrderDetails({onClose}) {
    const orderId = useSelector(store => store.orderDetails.orderId)
    const handleModalClose = () => {
        onClose()
    }

    return (
        <div className={`${styles.content} pt-10 pr-10 pl-10 pb-4`}>
            <div className={styles.closeIcon}>
                <CloseIcon onClick={handleModalClose} type={"primary"}></CloseIcon>
            </div>
            <h4 className="text text_type_digits-large pt-30 pb-8">{orderId}</h4>
            <p className="text text_type_main-medium pb-15">идентификатор заказа</p>
            <img src={doneIconPath} className="pb-15"/>
            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной
                станции</p>
        </div>
    )
}

OrderDetails.propTypes = orderDetailsPropType;

export default OrderDetails