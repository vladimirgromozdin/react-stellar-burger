import React from 'react';
import ResetPasswordForm from "../../components/reset-password-form/reset-password-form";
import styles from "./reset-password.module.css"

function ResetPassword() {
    return (
        <section className={styles.resetPasswordSection}>
            <ResetPasswordForm />
        </section>
    );
}

export default ResetPassword;