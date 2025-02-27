export function traiterValeur(parameter: string | number) {
  if (typeof parameter === "string") {
    console.log(parameter.length);
  } else {
    console.log(parameter * 2);
  }
}
