import { Personne } from "../../s1/ep1/personne.js";
export interface InformationsPersonne extends Personne {
    readonly id: number;
    adress?: {
        street: string;
        city: string;
    };
}
export declare function afficherPersonneAvancee(personne: InformationsPersonne): void;
