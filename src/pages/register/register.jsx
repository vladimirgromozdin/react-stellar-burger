import React from 'react';
import RegisterForm from "../../components/register-form/register-form";
import styles from "./register.module.css"

function Register() {
    return (
        <section className={styles.registerSection}>
            <RegisterForm />
        </section>
    );
}

export default Register;