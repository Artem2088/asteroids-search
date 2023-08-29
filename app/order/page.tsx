"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";

import Image from "next/image";

import earth from "../../public/images/planeta_zemlia.png";
import { OrderItem } from "../components";
import styles from "../styles/Order.module.css";

import type { AsteroidProps } from "@/types";

const Order: FC = () => {
  const [listsItem, setListsItem] = useState<AsteroidProps[]>([]);

  useEffect(() => {
    const getLocal = localStorage.getItem("localLists") || "[]";
    const order = JSON.parse(getLocal);
    setListsItem(order);
  }, []);

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
