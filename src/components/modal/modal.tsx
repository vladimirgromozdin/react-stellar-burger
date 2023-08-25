import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "../modal/modal.module.css"
import ModalOverlay from "../modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IModalProps} from "../../services/types";

const modalRoot: Element | null = document.getElementById("modalRender");


function Modal(props: IModalProps) {
    const {children, onClose, showCloseIcon = true} = props;

    useEffect(() => {
        const handleEscPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        };

            document.addEventListener('keydown', handleEscPress);

        return () => {
            document.removeEventListener('keydown', handleEscPress);
        };
    }, []);
    const handleOverlayClick = ():void => {
        onClose();
    };

    // Guard Clause for modalRoot
    if (!modalRoot) {
        console.error("Modal root element not found!");
        return null;
    }

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <ModalOverlay onClose={handleOverlayClick}/>
                <div className={styles.modalContent}>
                    {children}
                    {showCloseIcon &&
                        <div className={styles.closeIcon}><CloseIcon type={"primary"} onClick={onClose}/></div>}
                </div>
            </div>
        </>, modalRoot);
}

export default Modal