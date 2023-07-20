import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/burgerIngredients";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Login from "../../pages/login/login";
import Profile from "../../pages/profile/profile";
import {checkUserAuth} from "../../services/api";
import Homepage from "../../pages/home/home";
import {Route, Routes} from 'react-router-dom';
import {OnlyAuth, OnlyUnAuth} from "../protected-route/protected-route";
import PageNotFount from "../../pages/404/404";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkUserAuth());
    }, []);
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);


    return (<div className={`${styles.app} pt-10 pb-10`}>
        <header>
            <AppHeader/>
            <div></div>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="*" element={<PageNotFount />} />
                <Route path="/login" element={<OnlyUnAuth component={<Login/>}/>}/>
                <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>}/>}/>
                <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword/>}/>}/>
                <Route path="/register" element={<OnlyUnAuth component={<Register/>}/>}/>
                <Route path="/profile" element={<OnlyAuth component={<Profile/>}/>}/>
            </Routes>
            <div id="modalRender"></div>
        </main>
    </div>);
}

export default App;
