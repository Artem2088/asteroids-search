"use client";
import React, { FC, useState, useEffect } from "react";
import styles from "../styles/OrderItem.module.css";
import Image from "next/image";
import { AsteroidProps } from "@/types";
import arrow from "../../public/icons/Arrow.svg";
import asteroid from "../../public/icons/asteroid_small.svg";
import asteroidBig from "../../public/icons/asteroid_big.svg";
import diameter from "../../public/icons/diameter.svg";
import danger from "../../public/icons/danger.svg";

interface IOrderProps {
  item: AsteroidProps;
}

const OrderItem: FC<IOrderProps> = ({ item }) => {
  const [distance, setDistance] = useState<AsteroidProps[]>([]);
  const [size, setSize] = useState<number>(0);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    for (let key in item.close_approach_data) {
      let newArr = item.close_approach_data[key];
      setDate(newArr.close_approach_data);
      setDistance(item.close_approach_data[key].miss_distance);
    }
  }, [distance]);

  useEffect(() => {
    setSize(Math.floor(item.estimated_diameter?.meters.estimated_diameter_max!));
  }, []);

  return (
    <li className={styles.wrapper}>
      <h3 className={styles.title}>{date}</h3>
      <div className={styles.container}>
        <div className={styles.boxDist}>
          <span className={styles.distance}>{distance?.kilometers}км</span>
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
        {item.is_potentially_hazardous_asteroid ? (
          <Image src={danger} alt='опасно' className={styles.danger} />
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default OrderItem;
