import { afficherPersonne } from "./s1/ep1/personne.js";
import { afficherPersonneAvancee, } from "./s1/ep2/personne.js";
// Episode 1
let personne1 = { name: "Modibo", age: 18 };
console.log(afficherPersonne(personne1));
// Episode 2
let personne2 = {
    id: 1,
    name: "Modibo",
    age: 18,
    adress: { street: "5th Avenue", city: "New York" },
};
let personne3 = {
    id: 2,
    name: "Adrien",
    age: 21,
};
console.log("Episode 2:", afficherPersonneAvancee(personne2));
console.log("Episode 2:", afficherPersonneAvancee(personne3));
