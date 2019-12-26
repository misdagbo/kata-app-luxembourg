import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SymptomesService } from "../symptomes/symptomes.service";
import { MedicamentsService } from "../medicaments/medicaments.service";
import { Maladie } from 'src/app/shared/models/maladie.model';
import { Symptome } from 'src/app/shared/models/symptome.model';
import { Medicament } from 'src/app/shared/models/medicament.model';

@Injectable({
  providedIn: "root"
})
export class MaladiesService {
  maladiesChanged = new Subject<Maladie[]>();

  private maladies: Maladie[] = [
    new Maladie(
      "Migraine",
      [new Symptome("Symp 1"), new Symptome("Symp 2")],
      [
        new Medicament("Medoc 1", "Posologie 1"),
        new Medicament("Medoc 2", "Posologie 2")
      ]
    ),
    new Maladie(
      "Appendicite",
      [new Symptome("Symp 3"), new Symptome("Symp 4")],
      [
        new Medicament("Medoc 3", "Posologie 3"),
        new Medicament("Medoc 4", "Posologie 4")
      ]
    )
  ];

  constructor(
    private sympService: SymptomesService,
    private medocService: MedicamentsService
  ) {}

  getMaladies(): Maladie[] {
    return [...this.maladies];
  }

  getMaladie(index: number): Maladie {
    return [...this.maladies][index];
  }

  addMaladie(newMaladie: Maladie) {
    this.maladies.push(newMaladie);
    this.maladiesChanged.next([...this.maladies]);
  }

  updateMaladie(index: number, newMaladie: Maladie) {
    this.maladies[index] = newMaladie;
    this.maladiesChanged.next([...this.maladies]);
  }

  addToSymptomesList(symptomes: Symptome[]) {
    this.sympService.addSymptomes(symptomes);
  }

  addToMedicamentsList(medocs: Medicament[]) {
    this.medocService.addMedicaments(medocs);
  }

  deleteMaldie(index: number) {
    this.maladies.splice(index, 1);
    this.maladiesChanged.next([...this.maladies]);
  }
}
