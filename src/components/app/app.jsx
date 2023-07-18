import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/burgerIngredients";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import ProfileForm from "../profile-form/profile-form";
import Login from "../../pages/login/login";
import Profile from "../../pages/profile/profile";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);


    return (<div className={`${styles.app} pt-10 pb-10`}>
        <header>
            <AppHeader/>
            <div></div>
        </header>
        <main>
            <Register />
            <Login />
            <ForgotPassword />
            <ResetPassword />
            <Profile />
            {/*<div className={styles.builderArea}>*/}
            {/*    <DndProvider backend={HTML5Backend}>*/}
            {/*        <BurgerIngredients/>*/}
            {/*        <BurgerConstructor/>*/}
            {/*    </DndProvider>*/}
            {/*</div>*/}
            {/*<div id="modalRender"></div>*/}
        </main>
    </div>);
}

export default App;
