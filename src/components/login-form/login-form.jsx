import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import styles from "./login-form.module.css"

function LoginForm() {
    const [emailValue, setEmailValue] = useState('bob@example.com')
    const [passwordValue, setPasswordValue] = useState('')
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }

    return (<form className={styles.loginForm}>
        <p className="text text_type_main-medium pb-10">Вход</p>
        {/*TODO Modify inputs styling so the don't jump around when there's an error message*/}
        <EmailInput value={emailValue} onChange={onEmailChange} isIcon={false} extraClass="mb-6"/>
        <PasswordInput value={passwordValue} onChange={onPasswordChange} extraClass="mb-6"/>
        <Button htmlType="button" type="primary" size="medium" extraClass="mb-20">
            Войти
        </Button>
        <div className={`${styles.newUser} mb-4`}>
            <p className="text text_type_main-default text_color_inactive">Вы — новый
                пользователь?</p>
            <Button style={{padding: "0px 0px 0px 8px"}} cellSpacing={0}
                    htmlType="button" type="secondary" size="medium">
                Зарегистрироваться
            </Button></div>
        <div className={styles.passwordRecovery}>
            <p className="text text_type_main-default text_color_inactive">Забыли
                пароль?</p>
            <Button style={{padding: "0px 0px 0px 8px"}} htmlType="button"
                    type="secondary"
                    size="medium">
                Восстановить
            </Button></div>
    </form>)
}

export default LoginForm