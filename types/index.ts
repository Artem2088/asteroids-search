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
    id: number;
    name?: string;
    date: string;
    meters?: string;
    estimated_diameter_max?: number;
    estimated_diameter?: {}
    is_potentially_hazardous_asteroid
    : boolean;
    close_approach_data?: {};
    kilometers?: string;
    data: [];
}
