import { afficherPersonne, Personne } from "./s1/ep1/personne.js";
import {
  afficherPersonneAvancee,
  InformationsPersonne,
} from "./s1/ep2/personne.js";

// Episode 1
let personne1: Personne = { name: "Modibo", age: 18 };
afficherPersonne(personne1);

// Episode 2
let personne2: InformationsPersonne = {
  id: 1,
  name: "Modibo",
  age: 18,
  adress: { street: "5th Avenue", city: "New York" },
};

let personne3: InformationsPersonne = {
  id: 2,
  name: "Adrien",
  age: 21,
};

afficherPersonneAvancee(personne2);
afficherPersonneAvancee(personne3);
