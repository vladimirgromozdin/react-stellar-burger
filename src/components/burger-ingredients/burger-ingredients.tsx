import React, { useRef, useState } from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import Ingredient from "./ingredient/ingredient";
import { useSelector } from "../../services/types/hooks";
import { IngredientType } from "../../services/types";

function BurgerIngredients() {
  const [current, setCurrent] = useState("bun");
  const burgerIngredientsList = useSelector(
    (state) => state.burgerIngredients.ingredients,
  );
  const tabsHeight: number = 56;
  const bunTabRef = useRef<HTMLHeadingElement>(null);
  const sauceTabRef = useRef<HTMLHeadingElement>(null);
  const mainTabRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!bunTabRef.current || !sauceTabRef.current || !mainTabRef.current) {
      return;
    }
    const bunPosition = Math.abs(
      bunTabRef.current.getBoundingClientRect().top - tabsHeight,
    );
    const saucePosition = Math.abs(
      sauceTabRef.current.getBoundingClientRect().top - tabsHeight,
    );
    const mainPosition = Math.abs(
      mainTabRef.current.getBoundingClientRect().top - tabsHeight,
    );
    const minDistance = Math.min(bunPosition, saucePosition, mainPosition);

    if (minDistance === bunPosition) {
      setCurrent("bun");
    } else if (minDistance === saucePosition) {
      setCurrent("sauce");
    } else if (minDistance === mainPosition) {
      setCurrent("main");
    }
  };

  const refs = {
    bun: bunTabRef,
    sauce: sauceTabRef,
    main: mainTabRef,
  };

  const handleTabClick = (section: IngredientType) => {
    setCurrent(section);
    const ref = refs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.content}>
      <h2 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h2>
      <div className={styles.tabs}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={() => handleTabClick(IngredientType.Bun)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={() => handleTabClick(IngredientType.Sauce)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={() => handleTabClick(IngredientType.Main)}
        >
          Начинки
        </Tab>
      </div>
      <div
        onScroll={handleScroll}
        className={`${styles.burgerIngredients} custom-scroll`}
      >
        <h3
          ref={bunTabRef}
          className={`${styles.title} text text_type_main-medium pl-5 mt-10`}
          id="buns"
        >
          Булки
        </h3>
        <ul className={styles.grid}>
          {burgerIngredientsList
            .filter((item) => item.type === "bun")
            .map((ingredient) => (
              <Ingredient key={ingredient._id} ingredient={ingredient} />
            ))}
        </ul>
        <h3
          ref={sauceTabRef}
          className={`${styles.title} text text_type_main-medium pl-5 mt-10`}
          id="sauce"
        >
          Соусы
        </h3>
        <ul className={styles.grid}>
          {burgerIngredientsList
            .filter((item) => item.type === "sauce")
            .map((ingredient) => (
              <Ingredient key={ingredient._id} ingredient={ingredient} />
            ))}
        </ul>
        <h3
          ref={mainTabRef}
          className={`${styles.title} text text_type_main-medium pl-5 mt-10`}
          id="main"
        >
          Начинки
        </h3>
        <ul className={styles.grid}>
          {burgerIngredientsList
            .filter((item) => item.type === "main")
            .map((ingredient) => (
              <Ingredient key={ingredient._id} ingredient={ingredient} />
            ))}
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;
