interface Employe {
  name: string;
  post: string;
}

interface Customer {
  name: string;
  company: string;
}

type PersonnePro = Employe | Customer;

function afficherPersonneProfessionnelle(personne: PersonnePro): string {
  if ("post" in personne) {
    return `Employé: ${personne.name} travaille comme ${personne.post}`;
  } else {
    return `Client: ${personne.name} est associé à l'entreprise ${personne.company}`;
  }
}
