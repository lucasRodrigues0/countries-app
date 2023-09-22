export interface Country {
    name: {
        common: string,
        official: string
    };

    subregion: string;
    flags: {
        svg: string,
        alt: string
    }
}
