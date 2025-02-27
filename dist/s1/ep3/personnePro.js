export function afficherPersonneProfessionnelle(personne) {
    if ("post" in personne) {
        console.log(`Employé: ${personne.name} travaille comme ${personne.post}`);
    }
    else {
        console.log(`Client: ${personne.name} est associé à l'entreprise ${personne.company}`);
    }
}
