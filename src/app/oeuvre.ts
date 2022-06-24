import { Artiste } from "./artiste";
import { TypeOeuvre } from "./type-oeuvre";
import { Uploadedfile } from "./uploadedfile";

export class Oeuvre {
    id : number;
    libelleOeuvre : string;
    prixOeuvre : number;
    imgOeuvre : string;
    qteStockOeuvre : number;
    descriptionOeuvre : string;
    dateRealisation : string;
    tautRemise : number;
    type : TypeOeuvre;
    artiste : Artiste;
    file : Uploadedfile;
} {}
