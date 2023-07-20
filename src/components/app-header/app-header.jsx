import React from "react";
import '../../fonts/fonts.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import {Link, useMatch} from "react-router-dom";

function AppHeader() {
    const matchConstructor = useMatch("/");
    const matchProfile = useMatch("/profile");
    const matchLogin = useMatch("/login")
    const matchForgotPassword = useMatch("/forgot-password")
    const matchResetPassword = useMatch("/reset-password")
    return (<nav className={`${styles.appHeader} pt-4 pb-4`}>
        <ul className={styles.leftNavMenu}><Link className={styles.link} to='/'>
            <li className={`${styles.menuItem} ml-5 mr-5 ${matchConstructor ? styles.activeMenuItem : ''}`}>
                <BurgerIcon type={"primary"}/>
                <p className="text text_type_main-default ml-2">Конструктор</p>
            </li>
        </Link>
            <li className={`${styles.menuItem} ml-5 mr-5`}>
                <ListIcon type={"secondary"}/>
                <p className="text text_type_main-default ml-2">Лента заказов</p>
            </li>
        </ul>
        <div className={styles.logo}><Logo/></div>
        <div className={styles.rightNavMenu}>
            <Link className={styles.link} to='/profile'>
                <div className={`${styles.menuItem} ml-5 mr-5`}>
                    <ProfileIcon type={"secondary"}/>
                    <p className={`text text_type_main-default ml-2 ${matchProfile || matchLogin || matchForgotPassword || matchResetPassword ? styles.activeMenuItem : ''}`}>Личный кабинет</p>
                </div>
            </Link>
        </div>
    </nav>);
}

export default AppHeader;