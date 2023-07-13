import React from 'react';
import LoginForm from "../../components/login-form/login-form";
import styles from "./login.module.css"

function LoginPage() {
    // Handle login logic and state here
    return (
        <section className={styles.loginSection}>
            <LoginForm />
        </section>
    );
}

export default LoginPage;