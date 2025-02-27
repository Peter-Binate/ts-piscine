interface ArrayLength {
    length: number;
}
export interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}
export declare function premierElementS2<T extends ArrayLength>(tab: T[]): void;
export declare function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
export {};
