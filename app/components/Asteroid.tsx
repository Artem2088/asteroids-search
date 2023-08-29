"use client";
import "../styles/Asteroid.module.css";
import type { FC } from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import arrow from "../../public/icons/Arrow.svg";
import asteroidBig from "../../public/icons/asteroid_big.svg";
import asteroid from "../../public/icons/asteroid_small.svg";
import danger from "../../public/icons/danger.svg";
import diameter from "../../public/icons/diameter.svg";
import styles from "../styles/Asteroid.module.css";
import { WORDS } from "../utils/constants";

import type { AsteroidProps } from "@/types";

import { Button } from ".";

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
  const [distanceKm, setDistanceKm] = useState<number>(0);
  const [distanceLunar, setDistanceLunar] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [flag, setIsFlag] = useState<boolean>(false);
  const [status, setIsStatus] = useState<boolean>(false);
  let newWords: string = "";

  useEffect(() => {
    for (let key in item.close_approach_data) {
      let distanceKilometers = Number(
        item.close_approach_data[key].miss_distance?.kilometers
      );
      let distanceLun = Number(
        item.close_approach_data[key].miss_distance?.lunar
      );
      setDistanceKm(Math.round(distanceKilometers));
      setDistanceLunar(Math.round(distanceLun));
    }
  }, [distanceKm, distanceLunar]);

  useEffect(() => {
    setSize(
      Math.floor(item?.estimated_diameter?.meters.estimated_diameter_max!)
    );
  }, []);

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

  sklonenie(distanceLunar, WORDS);

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
      <h3 className={styles.title} onClick={async () => await getItemId(item)}>
        {date}
      </h3>
      <div className={styles.container}>
        <div className={styles.boxDist}>
          {activ ? (
            <span className={styles.distance}>{distanceKm} км</span>
          ) : (
            <span className={styles.distance}>
              {distanceLunar} {newWords}
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
