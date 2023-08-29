"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";

import styles from "../styles/AsteroidsLists.module.css";

import type { AsteroidProps, MaininfoProps } from "@/types";

import { Asteroid } from ".";

interface IMainProps {
  loading: boolean;
  addOrderLists: (item: AsteroidProps) => void;
  getItemId: (item: AsteroidProps) => void;
  mainData: AsteroidProps[];
  date: string;
}

const AsteroidsLists: FC<IMainProps> = ({
  mainData,
  loading,
  addOrderLists,
  getItemId,
  date,
}) => {
  const [info, setInfo] = useState<AsteroidProps[]>([]);
  const [activ, setIsActiv] = useState<boolean>(false);
  const [dateList, setDateList] = useState<string>("");

  useEffect(() => {
    setInfo(mainData);
    setDateList(date);
  }, [loading]);

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
          info?.map((prop) => {
            return prop.map((subItem: AsteroidProps, i: number | undefined) => {
              return (
                <Asteroid
                  item={subItem}
                  key={i}
                  date={dateList}
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
