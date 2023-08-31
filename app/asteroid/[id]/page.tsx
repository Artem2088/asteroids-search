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

interface IAsteroidProps {
  asteroid: AsteroidProps;
  context: any;
  params: {
    id: string;
  };
}

export async function getStaticPaths() {
  const day: any = new Date();
  const toDay: string =
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();

  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${toDay}&api_key=w0aIKsjDnvWNatg5wQVAeNgsWv9aZji2KMX9PAuo`
  );
  const asteroids = await res.json();
  let paths = {};
  for (let key in asteroids.near_earth_objects) {
    paths = asteroids.near_earth_objects[key].map(
      (asteroid: AsteroidProps) => ({
        params: { id: asteroid.id },
      })
    );
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: IAsteroidProps) {
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/neo/${params.id}?api_key=w0aIKsjDnvWNatg5wQVAeNgsWv9aZji2KMX9PAuo`
  );
  const post = await res.json();
  return { props: { post } };
}

const AsteroidEach: FC<IAsteroidProps> = ({ asteroid }: IAsteroidProps) => {
  console.log(asteroid);
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

  // useEffect(() => {
  //   if (asteroid.id) {
  //     const getlocalId: string | undefined =
  //       localStorage.getItem("item") || "[]";
  //     setItemId(JSON.parse(getlocalId));
  //   } else {
  //     alert("Что-то пошло не так!");
  //   }
  // }, []);

  useEffect(() => {
    if (typeof asteroid !== "undefined") {
      setAbsoluteMagnitudeH(asteroid.absolute_magnitude_h);
      setName(asteroid.name);

      setCloseApproachDate(asteroid.close_approach_data);

      setDiameterKmMax(
        asteroid.estimated_diameter.kilometers.estimated_diameter_max
      );
      setDiameterKmMin(
        asteroid.estimated_diameter.kilometers.estimated_diameter_min
      );
      setDiameterMeterMax(
        asteroid.estimated_diameter.meters.estimated_diameter_max
      );
      setDiameterMeterMin(
        asteroid.estimated_diameter.meters.estimated_diameter_min
      );
      setDiameterMilMax(
        asteroid.estimated_diameter.miles.estimated_diameter_max
      );
      setDiameterMilMin(
        asteroid.estimated_diameter.miles.estimated_diameter_min
      );
    }
  }, [itemId]);

  const localCleare = () => {
    localStorage.clear();
  };

  return (
    <Link href={`asteroid/${asteroid.id}`}>
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
              <span className={styles.milesMax}>
                Мили(MAX): {diameterMilMax}
              </span>
              <span className={styles.milesMin}>
                Мили(MIN): {diameterMilMin}
              </span>
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
    </Link>
  );
};

export default AsteroidEach;
