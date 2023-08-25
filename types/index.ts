import { MouseEventHandler } from "react";

export type ButtonProps = {
    title: string;
    containerStyles?: string;
    stylesTitle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit';
    onMousOver?: MouseEventHandler<HTMLButtonElement>
    onMouseOut?: MouseEventHandler<HTMLButtonElement>

}

export type MaininfoProps = {
    links: {};
    element_count: number;
    near_earth_objects: {
        [key: string]: AsteroidProps[]
    }
}

export type AsteroidProps = {
    absolute_magnitude_h: number;
    close_approach_data: {
        [key: string]: {
            close_approach_data: string;
            miss_distance: { kilometers: number; lunar: number };
        };
    };
    estimated_diameter?: {
        meters: { estimated_diameter_max?: number; estimated_diameter_min?: number };
        kilometers: { estimated_diameter_max?: number; estimated_diameter_min?: number };
        miles: { estimated_diameter_max?: number; estimated_diameter_min?: number }
    };
    is_potentially_hazardous_asteroid?: boolean;
    name?: string;
}

export type AsteroidCharachteristick = {
    close_approach_date: string;
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
}