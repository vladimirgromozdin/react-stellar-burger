import styles from "./app.module.css";
import {data} from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
    return (
        <div className={`${styles.app} pt-10 pb-10`}>
            <header>
                <AppHeader/>
            </header>
            <main>
                <div className={styles.builderArea}>
                    <section>
                        <BurgerIngredients data={data}/>
                    </section>
                    <section>
                        <BurgerConstructor/>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
