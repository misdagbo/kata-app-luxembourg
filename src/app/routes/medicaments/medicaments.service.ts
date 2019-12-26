import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Medicament } from 'src/app/shared/models/medicament.model';

@Injectable({
  providedIn: "root"
})
export class MedicamentsService {
  mediamentsChanged = new Subject<Medicament[]>();
  indexMedicamentSelected = new Subject<number>();
  private medicaments: Medicament[] = [
    new Medicament("Doliprane", "2 matin 2 soir pendant 10 jours"),
    new Medicament(
      "Auricularum",
      "2 gouttes 3 fois la journée pendant 15 jours"
    )
  ];
  constructor() {}

  getMedicaments(): Medicament[] {
    return [...this.medicaments];
  }

  getMedicament(index: number): Medicament {
    return [...this.medicaments][index];
  }


  addMedicaments(medocs: Medicament[]) {
    this.medicaments.push(...medocs);
    this.mediamentsChanged.next([...this.medicaments]);
  }

  addMedicament(newMedoc: Medicament) {
    this.medicaments.push(newMedoc);
    this.mediamentsChanged.next([...this.medicaments]);
  }

  updateMedicament(index: number, newMedoc: Medicament) {
    this.medicaments[index] = newMedoc;
    this.mediamentsChanged.next([...this.medicaments]);
  }

  deleteMedicament(index: number) {
    this.medicaments.splice(index, 1);
    this.mediamentsChanged.next([...this.medicaments]);
  }
}
