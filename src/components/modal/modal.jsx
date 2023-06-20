import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "../modal/modal.module.css"
import ModalOverlay from "../modal-overlay/modal-overlay";
import {modalPropType} from "../../utils/prop-types";

const modalRoot = document.getElementById("modalRender");


function Modal(props) {
    const {children, onClose} = props;

    useEffect(() => {
        const handleEscPress = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        };

        {
            document.addEventListener('keydown', handleEscPress);
        }

        return () => {
            document.removeEventListener('keydown', handleEscPress);
        };
    }, []);
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