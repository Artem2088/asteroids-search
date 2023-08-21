'use client'
import { useEffect, useState } from "react";
import { AsteroidProps } from "@/types";
import styles from '../../styles/AsteroidEach.module.css';

const AsteroidEach = () => {
    const [itemId, setItemId] = useState<AsteroidProps>();
    const [approachDate, setApproachDate] = useState<string>('')
    const getlocalId = typeof window !== 'undefined' ? localStorage.getItem('item') : null;
    const getlocalParse = JSON.parse(getlocalId!)

    useEffect(() => {
        setItemId(getlocalParse)
    }, [])

    useEffect(() => {
        for (let key in itemId?.close_approach_data) {
            setApproachDate(itemId.close_approach_data[key].close_approach_date)
        }
    }, [])



    return (
        <section className={styles.AsteroidEach}>
            <h1 className={styles.name}>{itemId?.name}</h1>
            <span className={styles.approach}>Дата максимального близкого подлета к Земле<span className={styles.approachDate}>{approachDate}</span></span>
            <div className={styles.container}>
                <h3 className={styles.distanceTitle}>
                    <span className={styles.kilometers}></span>
                </h3>
            </div>
        </section>
    )
}

export default AsteroidEach;