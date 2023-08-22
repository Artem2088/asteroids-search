"use client";
import "../styles/Asteroid.module.css";
import styles from "../styles/Asteroid.module.css";
import Image from "next/image";
import arrow from "../../public/icons/Arrow.svg";
import asteroid from "../../public/icons/asteroid_small.svg";
import asteroidBig from "../../public/icons/asteroid_big.svg";
import diameter from "../../public/icons/diameter.svg";
import danger from "../../public/icons/danger.svg";
import { Button } from ".";
import { FC, useEffect, useState } from "react";
import { AsteroidProps } from "@/types";
import Link from "next/link";

interface IAsteroidProps {
  date: string;
  activ: boolean;
  addOrderLists: (item: AsteroidProps) => void;
  getItemId: (item: AsteroidProps) => void;
  item: AsteroidProps;
}

const Asteroid: FC<IAsteroidProps> = ({
  item,
  date,
  activ,
  addOrderLists,
  getItemId,
}) => {
  const [distance, setDistance] = useState([]);
  const [size, setSize] = useState<number>(0);
  const [flag, setIsFlag] = useState<boolean>(false);
  const [status, setIsStatus] = useState<boolean>(false);

  useEffect(() => {
    for (let key in item.close_approach_data) {
      setDistance(item.close_approach_data[key].miss_distance);
    }
  }, [distance]);

  useEffect(() => {
    setSize(
      Math.floor(item?.estimated_diameter?.meters.estimated_diameter_max)
    );
  }, []);

  const MouseOver = () => {
    setIsFlag(true);
  };

  const MouseOut = () => {
    setIsFlag(false);
  };

  const changeStatus = () => {
    addOrderLists(item);
    setIsStatus(true);
  };

  return (
    <li className={styles.wrapper}>
      <Link href={`/asteroid/${item.id}`} className={styles.linkItem}>
        <h3 className={styles.title} onClick={() => getItemId(item)}>
          {date}
        </h3>
      </Link>
      <div className={styles.container}>
        <div className={styles.boxDist}>
          {activ ? (
            <span className={styles.distance}>{distance?.kilometers}км</span>
          ) : (
            <span className={styles.distance}>
              {distance?.lunar} лунные орбиты
            </span>
          )}

          <Image src={arrow} alt='стрелка' className={styles.arrow} />
        </div>
        <Image
          src={+size < 100 ? asteroid : asteroidBig}
          alt='астероид'
          className={styles.asteroid}
        />
        <div className={styles.boxName}>
          <span className={styles.name}>{item.name}</span>
          <div className={styles.boxSize}>
            <Image src={diameter} alt='диаметр' className={styles.diameter} />
            <span className={styles.size}>{size}m</span>
          </div>
        </div>
      </div>
      <div className={styles.boxOrder}>
        <Button
          onMousOver={MouseOver}
          onMouseOut={MouseOut}
          title={status ? "В КОРЗИНЕ" : "ЗАКАЗАТЬ"}
          handleClick={changeStatus}
          containerStyles={flag ? styles.hoverButton : styles.button}
          stylesTitle={
            status
              ? styles.hoverTitle
              : flag
              ? styles.hoverTitle
              : styles.titleBtn
          }
          btnType='button'
        />
        {item.is_potentially_hazardous_asteroid ? (
          <Image src={danger} alt='опасно' className={styles.danger} />
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default Asteroid;
