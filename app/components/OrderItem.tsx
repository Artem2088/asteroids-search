"use client";
import type { FC } from "react";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import arrow from "../../public/icons/Arrow.svg";
import asteroidBig from "../../public/icons/asteroid_big.svg";
import asteroid from "../../public/icons/asteroid_small.svg";
import danger from "../../public/icons/danger.svg";
import diameter from "../../public/icons/diameter.svg";
import styles from "../styles/OrderItem.module.css";
import { WORDS } from "../utils/constants";

import type { AsteroidProps } from "@/types";

interface IOrderProps {
  item: AsteroidProps;
}

const OrderItem: FC<IOrderProps> = ({ item }) => {
  const [kilometers, setKilometers] = useState<string>("");
  const [lunar, setLunar] = useState<string>("");
  const [size, setSize] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [distance, setDistance] = useState<number>(0);
  const [activStatus, setActivStatus] = useState<string>("");
  let newWords: string = "";

  console.log(item);

  useEffect(() => {
    for (let key in item.close_approach_data) {
      let newArr = item.close_approach_data[key];
      setDate(newArr.close_approach_date);
      setKilometers(item.close_approach_data[key].miss_distance.kilometers);
      setLunar(item.close_approach_data[key].miss_distance.lunar);
    }
  }, [kilometers, lunar]);

  // useEffect(() => {
  //   activStatus.map((item) => {
  //     setDistance(item ? Math.round(+kilometers) : Math.round(+lunar));
  //   });
  // }, [kilometers, lunar]);

  useEffect(() => {
    setSize(
      Math.floor(item.estimated_diameter?.meters.estimated_diameter_max!)
    );
  }, []);

  useEffect(() => {
    const localActiv: string[] = JSON.parse(
      localStorage.getItem("activ") || "[]"
    );
    localActiv.forEach((item) => {
      setActivStatus(item);
    });
  }, [distance]);

  const sklonenie = (
    num: number,
    txt: string[],
    cases = [2, 0, 1, 1, 1, 2]
  ) => {
    newWords =
      txt[
        num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
      ];
  };

  sklonenie(+lunar, WORDS);
  // console.log(distance, activStatus);

  return (
    <li className={styles.wrapper}>
      <h3 className={styles.title}>{date}</h3>
      <div className={styles.container}>
        <div className={styles.boxDist}>
          <span className={styles.distance}>
            {/* {distance} */}
            {activStatus ? "km" : newWords}
          </span>
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
