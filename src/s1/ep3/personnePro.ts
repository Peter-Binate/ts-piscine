interface Employe {
  name: string;
  post: string;
}

interface Customer {
  name: string;
  company: string;
}

export type PersonnePro = Employe | Customer;

export function afficherPersonneProfessionnelle(personne: PersonnePro) {
  if ("post" in personne) {
    console.log(
      `Episode 3: Employé => ${personne.name} travaille comme ${personne.post}`
    );
  } else {
    console.log(
      `Episode 3: Client => ${personne.name} est associé à l'entreprise ${personne.company}`
    );
  }
}
