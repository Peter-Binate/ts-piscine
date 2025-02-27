export interface Personne {
  name: string;
  age: number;
}

export function afficherPersonne(personne: Personne) {
  console.log(
    `Episode 1: Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans.`
  );
}
