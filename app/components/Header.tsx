import { FC } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header: FC = () => {
  return (
    <Link href={"/"}>
      <header className={styles.header}>
        <h1 className={styles.title}>ARMAGEDDON 2023</h1>
        <p className={styles.description}>
          ООО “Команда им. Б. Уиллиса”. <br /> Взрываем астероиды с 1998 года.
        </p>
      </header>
    </Link>
  );
};

export default Header;
