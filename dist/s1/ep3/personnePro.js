export function afficherPersonneProfessionnelle(personne) {
    if ("post" in personne) {
        console.log(`Episode 3: Employé => ${personne.name} travaille comme ${personne.post}`);
    }
    else {
        console.log(`Episode 3: Client => ${personne.name} est associé à l'entreprise ${personne.company}`);
    }
}
