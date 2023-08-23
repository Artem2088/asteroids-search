import { FC } from "react";
import { Button } from ".";
import styles from "../styles/Basket.module.css";
import { AsteroidProps } from "@/types";
import Link from "next/link";

interface IBasketProps {
  orderLists: AsteroidProps[];
}

const Basket: FC<IBasketProps> = ({ orderLists }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>Корзина</h3>
        {orderLists.length == 0 ? (
          <span className={styles.asteroid}>Добавьте заказ</span>
        ) : (
          <span className={styles.counter}>
            {orderLists.length}
            <span className={styles.asteroid}>астероида</span>
          </span>
        )}
      </div>
      {orderLists.length == 0 ? (
        <Link href={"/"} className={styles.link}>
          <Button
            title='Отправить'
            containerStyles={styles.disabled}
            stylesTitle={styles.titleBtn}
            btnType='button'
          />
        </Link>
      ) : (
        <Link
          href={{
            pathname: "/order",
            query: {
              search: "search",
            },
          }}
          className={styles.link}
        >
          <Button
            title='Отправить'
            containerStyles={styles.button}
            stylesTitle={styles.titleBtn}
            btnType='button'
          />
        </Link>
      )}
    </section>
  );
};

export default Basket;
