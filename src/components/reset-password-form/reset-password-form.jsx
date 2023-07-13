import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import styles from "./reset-password-form.module.css"
import {resetPassword} from "../../services/actions/resetPasswordForm";
import {useDispatch} from "react-redux";
import {requestPasswordChangeEmail} from "../../services/actions/forgotPasswordForm";

function ResetPasswordForm() {
    const [codeValue, setCodeValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const dispatch = useDispatch()
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }
    const onCodeChange = e => {
        setCodeValue(e.target.value)
    }
    const token = ''
    // Remove the empty token later
    const handleResetPasswordClick = () => {
        dispatch(resetPassword(passwordValue, token))
    }
    return (<form className={styles.resetPasswordForm}>
        <p className="text text_type_main-medium pb-10">Восстановление пароля</p>
        <PasswordInput value={passwordValue} onChange={onPasswordChange} placeholder='Введите новый пароль'
                       extraClass="mb-6"/>
        <Input value={codeValue} onChange={onCodeChange} placeholder='Введите код из письма' extraClass="mb-6"/>
        <Button onClick={handleResetPasswordClick} htmlType="button" type="primary" size="medium" extraClass="mb-20">
            Сохранить
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

export default ResetPasswordForm