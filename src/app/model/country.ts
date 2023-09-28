import { Currency } from "./currency";

export interface Country {
    name: {
        common: string,
        official: string
    };
    region: string;
    subregion: string;
    flags: {
        svg: string,
        alt: string
    };
    population: string;
    capital: string;
    timezones: Array<string>;
    currencies: Currency;
}
