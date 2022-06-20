import { TypeOeuvre } from "./type-oeuvre";

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
    idClient : number;
} {}
