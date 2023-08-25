"use client";
import { FC, useState, useEffect } from "react";
import styles from "../styles/AsteroidCharacteristick.module.css";

interface IAsteroidCharacteristick {
  item: {
    close_approach_date: string | undefined;
    miss_distance: {
      astronomical: string;
      kilometers: string;
      lunar: string;
      miles: string;
    };
    orbiting_body: string;
    relative_velocity: {
      kilometers_per_hour: string;
      kilometers_per_second: string;
      miles_per_hour: string;
    };
  };
}

const AsteroidCharacteristick: FC<IAsteroidCharacteristick> = ({ item }) => {
  const [astronomical, setAstronomical] = useState<string>("");
  const [kilometers, setKilometers] = useState<string>("");
  const [lunar, setLunar] = useState<string>("");
  const [miles, setMiles] = useState<string>("");
  const [kilometersPerHour, setKilometersPerHour] = useState<string>("");
  const [kilometersPerSecond, setKilometersPerSecond] = useState<string>("");
  const [milesPerHour, setMilesPerHour] = useState<string>("");

  useEffect(() => {
    setAstronomical(item.miss_distance.astronomical);
    setKilometers(item.miss_distance.kilometers);
    setLunar(item.miss_distance.lunar);
    setMiles(item.miss_distance.miles);
    setKilometersPerHour(item.relative_velocity.kilometers_per_hour);
    setKilometersPerSecond(item.relative_velocity.kilometers_per_hour);
    setMilesPerHour(item.relative_velocity.miles_per_hour);
  }, []);

  return (
    <li className={styles.characteristick}>
      <h3 className={styles.date}>
        Дата сближения: {item.close_approach_date}
      </h3>
      <span className={styles.orbiting}>
        По какой орбите движется: {item.orbiting_body}
      </span>
      <div className={styles.wrapper}>
        <ul className={styles.container}>
          Дистанция:
          <li className={styles.distance}>{astronomical} astronomical</li>
          <li className={styles.distance}>{kilometers} kilometers</li>
          <li className={styles.distance}>{lunar} lunar</li>
          <li className={styles.distance}>{miles} miles</li>
        </ul>
        <ul className={styles.container}>
          {" "}
          Скорость:
          <li className={styles.velocity}>{kilometersPerHour} km/h</li>
          <li className={styles.velocity}>{kilometersPerSecond} km/s</li>
          <li className={styles.velocity}>{milesPerHour} mil/h</li>
        </ul>
      </div>
    </li>
  );
};

export default AsteroidCharacteristick;
