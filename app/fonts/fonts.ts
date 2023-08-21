import localFont from 'next/font/local';
import { Passion_One } from "next/font/google";

export const helvitica = localFont({
    src: [
        {
            path: './Helvetica-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Helvetica-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Helvetica.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Helvetica.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
})

export const passion = Passion_One({
    weight: '400',
    subsets: ["latin"],
    display: "swap",
});
