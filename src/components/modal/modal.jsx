import React, {useState} from "react";
import ReactDOM from "react-dom";
import styles from "../modal/modal.module.css"
import ModalOverlay from "../modal-overlay/modal-overlay";
import {modalPropType} from "../../utils/prop-types";

const modalRoot = document.getElementById("modalRender");


function Modal(props) {
    const { children, onClose } = props;
    const handleOverlayClick = () => {
        onClose();
    };

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <ModalOverlay onClose={handleOverlayClick}/>
                {children}
            </div>
        </>, modalRoot);
}

Modal.propTypes = modalPropType;

export default Modal