import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styles from "./register-form.module.css"
import {registerUser} from "../../services/actions/registerForm";

function RegisterForm() {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const dispatch = useDispatch()
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }

    const onNameChange = e => {
        setNameValue(e.target.value)
    }

    const handleRegisterClick = () => {
        dispatch(registerUser(emailValue, passwordValue, nameValue))
    }

    return (<form className={styles.registerForm}>
        <p className="text text_type_main-medium pb-10">Регистрация</p>
        <Input value={nameValue} onChange={onNameChange} placeholder='Имя' extraClass="mb-6"/>
        <EmailInput value={emailValue} onChange={onEmailChange} isIcon={false} extraClass="mb-6"/>
        <PasswordInput value={passwordValue} onChange={onPasswordChange} extraClass="mb-6"/>
        <Button htmlType="button" type="primary" size="medium" extraClass="mb-20" onClick={handleRegisterClick}>
            Зарегистрироваться
        </Button>
        <div className={`${styles.signIn} mb-4`}>
            <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
            <Button style={{padding: "0px 0px 0px 8px"}} cellSpacing={0}
                    htmlType="button" type="secondary" size="medium">
                Войти
            </Button></div>
    </form>)
}

export default RegisterForm