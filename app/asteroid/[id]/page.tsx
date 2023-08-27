"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";

import Link from "next/link";

import { AsteroidCharacteristick } from "@/app/components";

import styles from "../../styles/AsteroidEach.module.css";

import type { AsteroidCharachteristick, AsteroidProps } from "@/types";

const initialState = [
  {
    epoch_date_close_approach: 0,
    close_approach_date: "",
    miss_distance: {
      astronomical: "",
      kilometers: "",
      lunar: "",
      miles: "",
    },
    orbiting_body: "",
    relative_velocity: {
      kilometers_per_hour: "",
      kilometers_per_second: "",
      miles_per_hour: "",
    },
  },
];

const AsteroidEach: FC<AsteroidProps> = () => {
  const [name, setName] = useState<string>();
  const [closeApproachDate, setCloseApproachDate] = useState<
    AsteroidCharachteristick[] | undefined
  >(initialState);

  const [itemId, setItemId] = useState<AsteroidProps>();
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
  const [absoluteMagnitudeH, setAbsoluteMagnitudeH] = useState<
    number | undefined
  >(0);

  const hazardous = itemId?.is_potentially_hazardous_asteroid;

  useEffect(() => {
    const getlocalId: string | undefined = localStorage.getItem("item") || "[]";
    setItemId(JSON.parse(getlocalId));
  }, []);

  useEffect(() => {
    if (typeof itemId !== "undefined") {
      setAbsoluteMagnitudeH(itemId.absolute_magnitude_h);
      setName(itemId.name);

      setCloseApproachDate(itemId.close_approach_data!);

      setDiameterKmMax(
        itemId.estimated_diameter.kilometers.estimated_diameter_max
      );
      setDiameterKmMin(
        itemId.estimated_diameter.kilometers.estimated_diameter_min
      );
      setDiameterMeterMax(
        itemId.estimated_diameter.meters.estimated_diameter_max
      );
      setDiameterMeterMin(
        itemId.estimated_diameter.meters.estimated_diameter_min
      );
      setDiameterMilMax(itemId.estimated_diameter.miles.estimated_diameter_max);
      setDiameterMilMin(itemId.estimated_diameter.miles.estimated_diameter_min);
    }
  }, [itemId]);

  const localCleare = () => {
    localStorage.clear();
  };

  console.log(itemId?.close_approach_data);

  return (
    <section className={styles.AsteroidEach}>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Название: {name}</h1>
        <span className={styles.magnitudeH}>
          Абсолютная звёздная величина: {absoluteMagnitudeH}H
        </span>
        <span className={styles.approach}>
          Характеристики сближения с Землей:
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
        <ul className={styles.approachContainer}>
          {closeApproachDate?.map((item) => (
            <AsteroidCharacteristick
              item={item}
              key={item?.epoch_date_close_approach}
            />
          ))}
        </ul>
        <Link className={styles.back} href={"/"} onClick={localCleare}>
          На главную
        </Link>
      </div>
    </section>
  );
};

export default AsteroidEach;
