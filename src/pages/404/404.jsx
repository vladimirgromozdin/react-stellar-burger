import React from 'react';
import styles from "../404/404.module.css"

function PageNotFount() {
    return (
        <section>
            <p className={`${styles.page} text text_type_main-large`}>Страница не найдена</p>
        </section>
    );
}

export default PageNotFount;