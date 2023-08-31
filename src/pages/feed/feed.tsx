import React from "react";
import OrderStats from "../../components/orders-stats/order-stats";
import OrderFeed from "../../components/order-feed/order-feed";
import styles from "../feed/feed.module.css";

function Feed() {
  return (
    <div className={styles.feedSection}>
      <h2 className="text text_type_main-large">Лента заказов</h2>
      <div className={styles.feedContent}>
        <OrderFeed
          feedPersonal={false}
          wsUrl="wss://norma.nomoreparties.space/orders/all"
        />
        <OrderStats />
      </div>
    </div>
  );
}

export default Feed;
