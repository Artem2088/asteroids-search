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
    id: number;
}

export type AsteroidProps = {
    id: string;
    name?: string;
    date?: string;
    estimated_diameter?: {
        meters: { estimated_diameter_max?: number; estimated_diameter_min?: number };
        kilometers: { estimated_diameter_max?: number; estimated_diameter_min?: number };
        miles: { estimated_diameter_max?: number; estimated_diameter_min?: number }
    };
    is_potentially_hazardous_asteroid
    : boolean;
    close_approach_data?: {
        close_approach_data?: string;
        miss_distance?: {
            kilometers?: string; lunar?: string
        }
    };
    data: [];
    absolute_magnitude_h?: number;


}
