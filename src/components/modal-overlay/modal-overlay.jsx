import React from "react";
import styles from '../modal-overlay/modal-overlay.module.css'
import {modalOverlayPropType} from "../../utils/prop-types";


function ModalOverlay({onClose}) {
    const handleOverlayClick = () => {
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
        </div>
    )
}

ModalOverlay.propTypes = modalOverlayPropType

export default ModalOverlay