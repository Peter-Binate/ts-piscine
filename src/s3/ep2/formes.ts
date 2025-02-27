export class Rectangle {
  largeur: number;
  hauteur: number;
  constructor(largeur: number, hauteur: number) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }
  calculerSurface() {
    return this.largeur * this.hauteur;
  }
}

export class Cercle {
  rayon: number;
  constructor(rayon: number) {
    this.rayon = rayon;
  }
  calculerSurface() {
    return this.rayon * this.rayon * Math.PI;
  }
}

export type Forme = Rectangle | Cercle;

export function afficherSurface(forme: Forme): void {
  if (forme instanceof Rectangle) {
    console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}`);
  }
  if (forme instanceof Cercle) {
    console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}`);
  }
}
