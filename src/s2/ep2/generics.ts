interface ArrayLength {
  length: number;
}
export function premierElementS2<T extends ArrayLength>(tab: T[]) {
  tab.length > 0 ? console.log(tab[0]) : console.log("tableau vide");
}
