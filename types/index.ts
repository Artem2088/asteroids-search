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
    absolute_magnitude_h?: number;
    close_approach_data?: {
        [key: string]: {
            close_approach_data: string;
            miss_distance?: {kilometers?: string; lunar?: string};
        };
    };
    estimated_diameter?: {
        meters: { estimated_diameter_max?: number; estimated_diameter_min?: number };
        kilometers: { estimated_diameter_max?: number; estimated_diameter_min?: number };
        miles: { estimated_diameter_max?: number; estimated_diameter_min?: number }
    };
    id: string;
    is_potentially_hazardous_asteroid?: boolean;
    name?: string;
}
