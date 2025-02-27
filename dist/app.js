import { afficherPersonne } from "./s1/ep1/personne.js";
import { afficherPersonneAvancee, } from "./s1/ep2/personne.js";
import { afficherPersonneProfessionnelle, } from "./s1/ep3/personnePro.js";
// Episode 1
let personne1 = { name: "Modibo", age: 18 };
afficherPersonne(personne1);
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
afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
// Episode 3
let employe1 = {
    name: "Modibo",
    post: "Développeur",
};
let client1 = {
    name: "Adrien",
    company: "Google",
};
afficherPersonneProfessionnelle(employe1);
afficherPersonneProfessionnelle(client1);
