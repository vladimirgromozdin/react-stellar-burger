import React from "react";
import styles from '../modal-overlay/modal-overlay.module.css'
import {TModalOverlayProps} from "../../services/types";


function ModalOverlay({onClose}: TModalOverlayProps) {
    const handleOverlayClick = ():void => {
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
        </div>
    )
}

export default ModalOverlay