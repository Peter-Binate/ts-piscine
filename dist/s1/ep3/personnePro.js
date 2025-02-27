function afficherPersonneProfessionnelle(personne) {
    if ("post" in personne) {
        return `Employé: ${personne.name} travaille comme ${personne.post}`;
    }
    else {
        return `Client: ${personne.name} est associé à l'entreprise ${personne.company}`;
    }
}
export {};
