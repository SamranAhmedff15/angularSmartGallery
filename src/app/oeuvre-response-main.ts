import { Artiste } from "./artiste";
import { Oeuvre } from "./oeuvre";
import { TypeOeuvre } from "./type-oeuvre";

export class OeuvreResponseMain {
    oeuvre: Oeuvre;
    artiste: Artiste;
    type: TypeOeuvre;
}
