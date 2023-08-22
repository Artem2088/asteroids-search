"use client";
import { FC } from "react";
import styles from "./styles/Home.module.css";
import Image from "next/image";
import earth from "../public/images/planeta_zemlia.png";
import { AsteroidLists, Basket } from "./components";
import { useEffect, useState } from "react";
import { getAsteroidInfo, getServerSideProps } from "./utils/MainApi";
import { AsteroidProps, MaininfoProps } from "@/types";

const Home: FC = () => {
  const [mainInfo, setMainInfo] = useState<MaininfoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [orderLists, setOrderLists] = useState<AsteroidProps[]>([]);
  const [itemId, setItemId] = useState<string>("");
  const [localItemId, setLocalItemId] = useState();

  useEffect(() => {
    const localItem = JSON.stringify(localItemId);
    localStorage.setItem("item", localItem);
  }, [localItemId]);

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
    const newOrder = JSON.stringify({ orderLists });
    localStorage.setItem("localLists", newOrder);
  }, [orderLists]);

  const addOrderLists = (item: AsteroidProps) => {
    for (let key in orderLists) {
      if (orderLists[key].id == item.id) {
        return false;
      }
    }
    setOrderLists([...orderLists, item]);
  };

  const getItemId = (item: AsteroidProps) => {
    const newArr = Array(item);
    newArr.forEach((item) => {
      setItemId(item.id);
    });
  };

  const getData = async () => {
    await getServerSideProps()
      .then((data: MaininfoProps[]) => {
        setMainInfo(data);
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
        setLocalItemId(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className={styles.main}>
      <Image src={earth} alt='earth' className={styles.earth} priority />
      <AsteroidLists
        mainInfo={mainInfo}
        loading={loading}
        addOrderLists={addOrderLists}
        getItemId={getItemId}
      />
      <Basket orderLists={orderLists} />
    </main>
  );
};

export default Home;
