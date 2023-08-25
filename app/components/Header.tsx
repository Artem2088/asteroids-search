"use client";
import type { FC } from "react";

import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header: FC = () => {
  const clearLocal = () => {
    localStorage.clear();
  };

  return (
    <Link href={"/"} onClick={clearLocal}>
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
