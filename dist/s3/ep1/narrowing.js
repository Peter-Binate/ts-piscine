export function traiterValeur(parameter) {
    if (typeof parameter === "string") {
        console.log(parameter.length);
    }
    else {
        console.log(parameter * 2);
    }
}
