"use client";
import { FC, useEffect, useState } from "react";
import { Asteroid } from ".";
import styles from "../styles/AsteroidsLists.module.css";
import { MaininfoProps, AsteroidProps } from "@/types";

interface IMainProps {
  loading: boolean;
  addOrderLists: (item: AsteroidProps) => void;
  getItemId: (item: AsteroidProps) => void;
  mainInfo: MaininfoProps[];
}

const AsteroidsLists: FC<IMainProps> = ({
  mainInfo,
  loading,
  addOrderLists,
  getItemId,
}) => {
  const [date, setDate] = useState<string>("");
  const [info, setInfo] = useState<any[]>([]);
  const [activ, setIsActiv] = useState<boolean>(false);

  useEffect(() => {
    for (let key in mainInfo.near_earth_objects) {
      setDate(key);
      setInfo(mainInfo.near_earth_objects[key]);
    }
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
            id='kilometers'
          >
            в километрах
          </button>
          <span className={styles.span}>|</span>
          <button
            type='button'
            className={activ ? styles.btn_activ : styles.btn}
            onClick={handleClick}
            id='lunar'
          >
            в лунных орбитах
          </button>
        </div>
      </div>
      <>
        {loading ? (
          <h3 className={styles.loading}>Loading...</h3>
        ) : (
          info.map((item) => (
            <Asteroid
              item={item}
              key={item.id}
              date={date}
              activ={activ}
              addOrderLists={addOrderLists}
              getItemId={getItemId}
            />
          ))
        )}
      </>
    </ul>
  );
};

export default AsteroidsLists;
