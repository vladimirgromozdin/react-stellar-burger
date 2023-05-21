import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";


const api = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
    const [ingredients, setIngredients] = useState([]);
    const checkResponse = (res) => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    };

    // Fetch data on component mount
    useEffect(() => {
        getIngredients()
    }, [])

    const getIngredients = async () => {
        fetch(api).then(checkResponse).then(res => {
            setIngredients(res.data)
        })
    }

    return (
        <div className={`${styles.app} pt-10 pb-10`}>
            <header>
                <AppHeader/>
                <div></div>
            </header>
            <main>
                <div className={styles.builderArea}>
                    <section>
                        <BurgerIngredients ingredients={ingredients}/>
                    </section>
                    <section>
                        <BurgerConstructor/>
                    </section>
                </div>
                <div id="modalRender"></div>
            </main>
        </div>
    );
}

export default App;
