"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";

import styles from "../styles/AsteroidsLists.module.css";

import type { AsteroidProps } from "@/types";

import { Asteroid } from ".";

interface IMainProps {
  loading: boolean;
  addOrderLists: (item: AsteroidProps, activ: boolean) => void;
  getItemId: (item: AsteroidProps) => void;
  mainData: AsteroidProps[];
}

const AsteroidsLists: FC<IMainProps> = ({
  mainData,
  loading,
  addOrderLists,
  getItemId,
}) => {
  const [info, setInfo] = useState<any[]>([]);
  const [activ, setIsActiv] = useState<boolean>(false);
  const [stepVisible, setStepVisible] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    if (isFetching) {
      setStepVisible(stepVisible + 1);
    }
  }, [isFetching]);

  useEffect(() => {
    setInfo(mainData || []);
  }, [loading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (): void => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setIsFetching(true);
    } else {
      setIsFetching(false);
    }
  };

  const handleClick = () => {
    setIsActiv(!activ);
  };

  return (
    <ul className={styles.lists}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
        <div className={styles.container}>
          <button
            type='button'
            className={activ ? styles.btn : styles.btn_activ}
            onClick={handleClick}
          >
            в километрах
          </button>
          <span className={styles.span}>|</span>
          <button
            type='button'
            className={activ ? styles.btn_activ : styles.btn}
            onClick={handleClick}
          >
            в лунных орбитах
          </button>
        </div>
      </div>
      <>
        {loading ? (
          <h3 className={styles.loading}>Loading...</h3>
        ) : (
          info?.slice(0, stepVisible).map((prop) => {
            return prop.map((subItem: AsteroidProps, i: number | undefined) => {
              return (
                <Asteroid
                  item={subItem}
                  key={i}
                  activ={activ}
                  addOrderLists={addOrderLists}
                  getItemId={getItemId}
                />
              );
            });
          })
        )}
      </>
    </ul>
  );
};

export default AsteroidsLists;
