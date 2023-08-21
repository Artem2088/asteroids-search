import { FC } from "react";
import styles from "../styles/Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ARMAGEDDON 2023</h1>
      <p className={styles.description}>
        ООО “Команда им. Б. Уиллиса”. <br /> Взрываем астероиды с 1998 года.
      </p>
    </header>
  );
};

export default Header;
