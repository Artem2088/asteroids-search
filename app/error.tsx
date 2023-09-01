"use client";
import { useEffect } from "react";

import Link from "next/link";

import styles from "./styles/Error.module.css";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.pageNotFaund}>
      <div className={styles.pageNotFaund__container}>
        <span className={styles.pageNotFaund__span}>404</span>
        <p className={styles.pageNotFaund__title}>Страница не найдена</p>
      </div>
      <Link href={"/"} className={styles.pageNotFaund__back}>
        Назад
      </Link>
    </section>
  );
};

export default Error;
