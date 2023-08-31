import React from "react";
import styles from "./forgot-password.module.css";
import ForgotPasswordForm from "../../components/forgot-password-form/forgot-password-form";

function ForgotPassword() {
  return (
    <section className={styles.forgotPasswordSection}>
      <ForgotPasswordForm />
    </section>
  );
}

export default ForgotPassword;
