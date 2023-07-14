import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import styles from "./profile-form.module.css"

function ProfileForm() {
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }
    const onNameChange = e => {
        setNameValue(e.target.value)
    }


    return (<section className={styles.profileSection}>
        <nav className={styles.navElement}>
            <ul className={`${styles.leftNav} text mb-20`}>
                <li className={`${styles.navItem} text_type_main-medium`}>Профиль</li>
                <li className={`${styles.navItem} text_type_main-medium text_color_inactive`}>История заказов</li>
                <li className={`${styles.navItem} text_type_main-medium text_color_inactive`}>Выход</li>
            </ul>
            <p className="text text_type_main-small text_color_inactive">В этом разделе вы можете <br /> изменить свои персональные данные</p>
        </nav>
        <form className={`${styles.profileForm} ml-15`}>
            <Input type={"text"} icon={'EditIcon'} value={nameValue} onChange={onNameChange} placeholder='Имя'/>
            <EmailInput isIcon={true} value={emailValue} onChange={onEmailChange}/>
            <PasswordInput icon={'EditIcon'} value={passwordValue} onChange={onPasswordChange}
                           extraClass="mb-6"/>
        </form>
    </section>)
}

export default ProfileForm