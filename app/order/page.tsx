"use client";
import { FC, useEffect, useState } from "react";
import { AsteroidProps } from "@/types";
import { OrderItem } from "../components";
import styles from "../styles/Order.module.css";
import Image from "next/image";
import earth from "../../public/images/planeta_zemlia.png";

const Order: FC = () => {
  const [listsItem, setListsItem] = useState<AsteroidProps[]>([]);

  const getLocal =
    typeof window !== "undefined" ? localStorage.getItem("localLists") : null;
  const order = JSON.parse(getLocal!);

  useEffect(() => {
    setListsItem(order);
  }, []);

  const clearLocal = () => {
    localStorage.clear();
  };

  return (
    <section className={styles.order}>
      <Image src={earth} alt='earth' className={styles.earth} priority />
      <ul className={styles.lists}>
        <h1 className={styles.title}>Заказ отправлен!</h1>
        {listsItem?.map((item: AsteroidProps) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>
      <span className={styles.footer}>&copy; Все права и планета защищены</span>
    </section>
  );
};

export default Order;
