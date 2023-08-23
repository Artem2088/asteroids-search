"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { AsteroidProps } from "@/types";
import styles from "../../styles/AsteroidEach.module.css";
import Image from "next/image";
import asteroid from "../../../public/images/wr-960.webp";

const AsteroidEach: FC<AsteroidProps> = () => {
  const [itemId, setItemId] = useState<AsteroidProps>();
  const [approachDate, setApproachDate] = useState<string>("");
  const [diameterKmMin, setDiameterKmMin] = useState<number | undefined>(0);
  const [diameterKmMax, setDiameterKmMax] = useState<number | undefined>(0);
  const [diameterMeterMax, setDiameterMeterMax] = useState<number | undefined>(
    0
  );
  const [diameterMeterMin, setDiameterMeterMin] = useState<number | undefined>(
    0
  );
  const [diameterMilMax, setDiameterMilMax] = useState<number | undefined>(0);
  const [diameterMilMin, setDiameterMilMin] = useState<number | undefined>(0);
  const absoluteMagnitudeH = itemId?.absolute_magnitude_h;
  const getlocalId =
      typeof window !== "undefined" ? localStorage.getItem("item") : null;
  const getlocalParse = JSON.parse(getlocalId!);
  const hazardous: boolean = itemId?.is_potentially_hazardous_asteroid!;

  useEffect(() => {
       setItemId(getlocalParse)
}, []);

  useEffect(() => {
    for (let key in itemId?.close_approach_data) {
      setApproachDate(itemId.close_approach_data[key].close_approach_data);
    }
    setDiameterKmMax(
      itemId?.estimated_diameter?.kilometers.estimated_diameter_max
    );
    setDiameterKmMin(
      itemId?.estimated_diameter?.kilometers.estimated_diameter_min
    );
    setDiameterMeterMax(
      itemId?.estimated_diameter?.meters.estimated_diameter_max
    );
    setDiameterMeterMin(
      itemId?.estimated_diameter?.meters.estimated_diameter_min
    );
    setDiameterMilMax(itemId?.estimated_diameter?.miles.estimated_diameter_max);
    setDiameterMilMin(itemId?.estimated_diameter?.miles.estimated_diameter_min);
  }, [itemId]);

  const localCleare = () => {
    localStorage.clear();
  };

  return (
    <section className={styles.AsteroidEach}>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Название: {itemId?.name}</h1>
        <span className={styles.magnitudeH}>
          Абсолютная звёздная величина: {absoluteMagnitudeH}H
        </span>
        <span className={styles.approach}>
          Дата максимального близкого подлета к Земле:
          <span className={styles.approachDate}>{approachDate}</span>
        </span>
        <div className={styles.container}>
          <h3 className={styles.distanceTitle}>Размер:</h3>
          <div className={styles.kmBox}>
            <span className={styles.kilometerMax}>
              Киллометр(MAX): {diameterKmMax}
            </span>
            <span className={styles.kilometerMin}>
              Киллометр(MIN): {diameterKmMin}
            </span>
          </div>
          <div className={styles.metersBox}>
            <span className={styles.metersMax}>
              Метры (MAX): {diameterMeterMax}
            </span>
            <span className={styles.metersMin}>
              Метры (MIN): {diameterMeterMin}
            </span>
          </div>
          <div className={styles.milesBox}>
            <span className={styles.milesMax}>Мили(MAX): {diameterMilMax}</span>
            <span className={styles.milesMin}>Мили(MIN): {diameterMilMin}</span>
          </div>
        </div>
        <span className={styles.hazardous}>
          Опасен:{" "}
          {hazardous == false ? (
            <span className={styles.notDanger}>Нет</span>
          ) : (
            <span className={styles.danger}>Да</span>
          )}
        </span>
        <Link
          href={"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54376834"}
          className={styles.linkNasa}
        >
          Ссылка NASA
        </Link>
        
        <Link className={styles.back} href={"/"} onClick={localCleare}>
          На главную
        </Link>
      </div>
      <Image
          src={asteroid}
          alt='астероид'
          className={styles.asteroid}
          priority
        />
    </section>
  );
};

export default AsteroidEach;
