import { Personne } from "../../s1/ep1/personne.js";

export interface InformationsPersonne extends Personne {
  readonly id: number;
  adress?: {
    street: string;
    city: string;
  };
}

export function afficherPersonneAvancee(personne: InformationsPersonne) {
  if (personne.adress) {
    console.log(
      `Episode 2: Bonjour, je m'appelle ${personne.name} 
      (ID: ${personne.id}), j'ai ${personne.age} ans 
      et j'habite au ${personne.adress.street}, ${personne.adress.city}.
      `
    );
  } else {
    console.log(
      `Episode 2: Bonjour, je m'appelle ${personne.name} 
      (ID: ${personne.id}), j'ai ${personne.age} ans.
      `
    );
  }
}
