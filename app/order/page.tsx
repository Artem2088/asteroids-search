"use client";
import { FC} from "react";
import { AsteroidProps } from "@/types";
import { OrderItem } from "../components";
import styles from "../styles/Order.module.css";
import Image from "next/image";
import earth from "../../public/images/planeta_zemlia.png";
import Link from "next/link";

const Order: FC = () => {
  const getLocal =
    typeof window !== "undefined" ? localStorage.getItem("localLists") : null;
  const order = JSON.parse(getLocal!);

  const clearLocal = () => {
    localStorage.clear();
  };

  return (
    <section className={styles.order}>
      <Image src={earth} alt='earth' className={styles.earth} priority />
      <ul className={styles.lists}>
        <h1 className={styles.title}>Заказ отправлен!</h1>
        <Link href={"/"} className={styles.linkFromMain} onClick={clearLocal}>
          На главную
        </Link>
        {order?.map((item: AsteroidProps) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>
      <span className={styles.footer}>&copy; Все права и планета защищены</span>
    </section>
  );
};

export default Order;
