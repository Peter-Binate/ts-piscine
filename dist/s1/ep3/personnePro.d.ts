interface Employe {
    name: string;
    post: string;
}
interface Customer {
    name: string;
    company: string;
}
export type PersonnePro = Employe | Customer;
export declare function afficherPersonneProfessionnelle(personne: PersonnePro): void;
export {};
