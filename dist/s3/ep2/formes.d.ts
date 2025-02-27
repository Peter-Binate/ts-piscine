export declare class Rectangle {
    largeur: number;
    hauteur: number;
    constructor(largeur: number, hauteur: number);
    calculerSurface(): number;
}
export declare class Cercle {
    rayon: number;
    constructor(rayon: number);
    calculerSurface(): number;
}
export type Forme = Rectangle | Cercle;
export declare function afficherSurface(forme: Forme): void;
