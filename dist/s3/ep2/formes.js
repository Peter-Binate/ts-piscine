export class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
export class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    calculerSurface() {
        return this.rayon * this.rayon * Math.PI;
    }
}
export function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}`);
    }
    if (forme instanceof Cercle) {
        console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}`);
    }
}
