import { FC } from "react";
import { Button } from ".";
import styles from "../styles/Basket.module.css";
import { AsteroidProps } from "@/types";
import Link from "next/link";
import { ENDINGS } from "../utils/constants";

interface IBasketProps {
  orderLists: AsteroidProps[];
}

const Basket: FC<IBasketProps> = ({ orderLists }) => {
  let newEnding: string = "";

  const sklonenie = (
    num: number,
    txt: string[],
    cases = [2, 0, 1, 1, 1, 2]
  ) => {
    newEnding =
      txt[
        num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
      ];
  };

  sklonenie(orderLists.length, ENDINGS);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>Корзина</h3>
        {orderLists.length == 0 ? (
          <span className={styles.asteroid}>Добавьте заказ</span>
        ) : (
          <span className={styles.counter}>
            {orderLists.length}
            <span className={styles.asteroid}>астероид{newEnding}</span>
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
