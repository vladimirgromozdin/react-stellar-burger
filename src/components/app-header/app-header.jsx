import React from "react";
import '../../fonts/fonts.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

function AppHeader() {
    return (
        <nav className={`${styles.appHeader} mt-4 mb-4`}>
            <ul className={styles.leftNavMenu}>
                <li className={`${styles.primaryMenuItem} ml-5 mr-5`}>
                    <BurgerIcon type={"primary"}/>
                    <p className="text text_type_main-default ml-2">Конструктор</p>
                </li>
                <li className={`${styles.secondaryMenuItem} ml-5 mr-5`}>
                    <ListIcon type={"secondary"}/>
                    <p className="text text_type_main-default ml-2">Лента заказов</p>
                </li>
            </ul>
            <div className={styles.logo}><Logo/></div>
            <div className={styles.rightNavMenu}>
                <div className={`${styles.secondaryMenuItem} ml-5 mr-5`}>
                    <ProfileIcon type={"secondary"}/>
                    <p className="text text_type_main-default ml-2">Личный кабинет</p>
                </div>
            </div>
        </nav>
    );
}

export default AppHeader;