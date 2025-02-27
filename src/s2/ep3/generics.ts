interface ArrayLength {
  length: number;
}

export interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

export function premierElementS2<T extends ArrayLength>(tab: T[]) {
  tab.length > 0 ? console.log(tab[0]) : console.log("tableau vide");
}

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  console.log(obj[key]);
  return obj[key];
}
