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
    capital: Array<String>;
    timezone: Array<String>;
}
