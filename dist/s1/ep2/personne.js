export function afficherPersonneAvancee(personne) {
    if (personne.adress) {
        console.log(`Episode 2: Bonjour, je m'appelle ${personne.name} 
      (ID: ${personne.id}), j'ai ${personne.age} ans 
      et j'habite au ${personne.adress.street}, ${personne.adress.city}.
      `);
    }
    else {
        console.log(`Episode 2: Bonjour, je m'appelle ${personne.name} 
      (ID: ${personne.id}), j'ai ${personne.age} ans.
      `);
    }
}
