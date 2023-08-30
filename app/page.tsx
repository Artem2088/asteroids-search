"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { AsteroidLists, Basket } from "./components";
import styles from "./styles/Home.module.css";
import { getAsteroidInfo, getServerSideProps } from "./utils/MainApi";
import earth from "../public/images/planeta_zemlia.png";

import type { AsteroidProps } from "@/types";

const Home: FC = () => {
  const [mainInfo, setMainInfo] = useState<AsteroidProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [orderLists, setOrderLists] = useState<AsteroidProps[]>([]);
  const [itemId, setItemId] = useState<string>("");
  const [loacalActiv, setLocalActiv] = useState<boolean[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!itemId) {
      return;
    }
    getAsteroid();
  }, [itemId]);

  useEffect(() => {
    const newOrder = JSON.stringify(orderLists);
    const newLocalActiv = JSON.stringify(loacalActiv);
    localStorage.setItem("activ", newLocalActiv);
    localStorage.setItem("localLists", newOrder);
  }, [orderLists]);

  const addOrderLists = (item: AsteroidProps, activ: boolean) => {
    for (let key in orderLists) {
      if (orderLists[key].id == item.id) {
        return false;
      }
    }
    setLocalActiv([...loacalActiv, activ]);
    setOrderLists([...orderLists, item]);
  };

  const getItemId = (itemIdAsteroid: AsteroidProps) => {
    setItemId(itemIdAsteroid.id);
  };

  const getData = async () => {
    let newMainArr: AsteroidProps[] = [];

    await getServerSideProps()
      .then((data) => {
        for (let key in data.near_earth_objects) {
          newMainArr.push(data.near_earth_objects[key]);
          setMainInfo(newMainArr);
        }
      })
      .catch((err: string): void => {
        console.log(err);
      })
      .finally((): void => {
        setLoading(false);
      });
  };

  const getAsteroid = async () => {
    await getAsteroidInfo(itemId)
      .then((data) => {
        const localItem = JSON.stringify(data);
        localStorage.setItem("item", localItem);
        console.log(data);
        push(`asteroid/${data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className={styles.main}>
      <Image src={earth} alt='earth' className={styles.earth} priority />
      <AsteroidLists
        mainData={mainInfo}
        loading={loading}
        addOrderLists={addOrderLists}
        getItemId={getItemId}
      />
      <Basket orderLists={orderLists} />
    </main>
  );
};

export default Home;
