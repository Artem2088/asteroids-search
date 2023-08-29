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
    links?: {};
    element_count?: number | undefined;
    near_earth_objects: {
        [key: string]: AsteroidProps[]
    }
}

export type AsteroidProps = {
    id: string;
    absolute_magnitude_h: number | undefined;
    close_approach_data: AsteroidCharachteristick[];
    estimated_diameter: {
        meters: { estimated_diameter_max: number | undefined; estimated_diameter_min: number | undefined };
        kilometers: { estimated_diameter_max: number | undefined; estimated_diameter_min: number | undefined };
        miles: { estimated_diameter_max: number | undefined; estimated_diameter_min: number | undefined }
    };
    is_potentially_hazardous_asteroid: never;
    name: never;
}

export type AsteroidCharachteristick = {
    [key: number]: number
    epoch_date_close_approach?: number;
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
