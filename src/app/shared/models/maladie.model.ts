import { Symptome } from "./symptome.model";
import { Medicament } from "./medicament.model";

export class Maladie {
  constructor(
    public name: string,
    public symptomes: Symptome[],
    public medicaments: Medicament[],
    public description ?: string
  ) {}
}
