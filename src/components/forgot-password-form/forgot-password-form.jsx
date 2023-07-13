import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import styles from "./forgot-password-form.module.css"
import {requestPasswordChangeEmail} from "../../services/actions/forgotPasswordForm";
import {useDispatch} from "react-redux";

function ForgotPasswordForm() {
    const [emailValue, setEmailValue] = useState('bob@example.com')
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const dispatch = useDispatch()
    const handleRecoverPasswordClick = () => {
        dispatch(requestPasswordChangeEmail(emailValue))
    }
    return (<form className={styles.forgotPasswordForm}>
        <p className="text text_type_main-medium pb-10">Восстановление пароля</p>
        <EmailInput value={emailValue} onChange={onEmailChange} isIcon={false} extraClass="mb-6"/>
        <Button onClick={handleRecoverPasswordClick} htmlType="button" type="primary" size="medium" extraClass="mb-20">
            Восстановить
        </Button>
        <div className={styles.rememberPassword}>
            <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
                пароль?</p>
            <Button style={{padding: "0px 0px 0px 8px"}} htmlType="button"
                    type="secondary"
                    size="medium">
                Войти
            </Button></div>
    </form>)
}

export default ForgotPasswordForm