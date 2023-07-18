import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useEffect, useState} from "react";
import styles from "./profile-form.module.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProfile, updateUserProfile} from "../../services/actions/profileForm";

function ProfileForm() {
    const userName = useSelector(store => store.profileForm.userInfo.name)
    const userEmail = useSelector(store => store.profileForm.userInfo.email)
    const [nameValue, setNameValue] = useState(userName)
    const [emailValue, setEmailValue] = useState(userEmail)
    const [passwordValue, setPasswordValue] = useState('*******')
    const dispatch = useDispatch()
    const isModified = userName !== nameValue || userEmail !== emailValue;
    const onEmailChange = e => {
        setEmailValue(e.target.value)
    }
    const onPasswordChange = e => {
        setPasswordValue(e.target.value)
    }
    const onNameChange = e => {
        setNameValue(e.target.value)
    }
    useEffect(() => {
        dispatch(fetchUserProfile())
    }, [dispatch])

    useEffect(() => {
        setNameValue(userName);
        setEmailValue(userEmail);
    }, [userName, userEmail]);

    const handleSaveClick = () => {
        dispatch(updateUserProfile(nameValue, emailValue))
    }

    const handleCancelClick = () => {
        setNameValue(userName)
        setEmailValue(userEmail)
    }


    return (<section className={styles.profileSection}>
        <nav className={styles.navElement}>
            <ul className={`${styles.leftNav} text mb-20`}>
                <li className={`${styles.navItem} text_type_main-medium`}>Профиль</li>
                <li className={`${styles.navItem} text_type_main-medium text_color_inactive`}>История заказов</li>
                <li className={`${styles.navItem} text_type_main-medium text_color_inactive`}>Выход</li>
            </ul>
            <p className="text text_type_main-small text_color_inactive">В этом разделе вы можете <br/> изменить свои
                персональные данные</p>
        </nav>
        <form className={`${styles.profileForm} ml-15`}>
            <Input type={"text"} icon={'EditIcon'} value={nameValue} onChange={onNameChange} placeholder='Имя'/>
            <EmailInput isIcon={true} value={emailValue} onChange={onEmailChange}/>
            <PasswordInput icon={'EditIcon'} value={passwordValue} onChange={onPasswordChange}/>
            <div>
                {/*TODO Conditionally make buttons interactive - inactive when there are no changes to save etc*/}
                <Button disabled={!isModified} htmlType="button" type="primary" size="medium" extraClass="mb-20" onClick={handleSaveClick}>
                    Сохранить
                </Button>
                <Button style={{padding: "0px 0px 0px 24px"}} cellSpacing={0}
                        htmlType="button" type="secondary" size="medium" onClick={handleCancelClick}>
                    Отмена
                </Button>
            </div>
        </form>
    </section>)
}

export default ProfileForm