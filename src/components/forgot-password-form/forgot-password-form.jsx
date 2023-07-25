import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import styles from "./forgot-password-form.module.css"
import {requestPasswordChangeEmail} from "../../services/actions/forgotPasswordForm";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

function ForgotPasswordForm() {
    const [emailValue, setEmailValue] = useState('')
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRecoverPasswordClick = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailValue)) {
            return;
        }

        dispatch(requestPasswordChangeEmail(emailValue, {
            onSuccess: () => navigate('/reset-password', {state: {from: '/forgot-password'}}),
        }));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleRecoverPasswordClick()
    }

    return (<form className={styles.forgotPasswordForm} onSubmit={handleFormSubmit}>
        <p className="text text_type_main-medium pb-10">Восстановление пароля</p>
        <EmailInput value={emailValue} onChange={onEmailChange} isIcon={false} extraClass="mb-6"/>
        <Button disabled={!emailValue} htmlType="submit" type="primary"
                size="medium"
                extraClass="mb-20">
            Восстановить
        </Button>
        <div className={styles.rememberPassword}>
            <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
                пароль?</p>
            <Link className={styles.link} to='/login'>
                <Button style={{padding: "0px 0px 0px 8px"}} htmlType="button"
                        type="secondary"
                        size="medium">
                    Войти
                </Button></Link></div>
    </form>)
}

export default ForgotPasswordForm