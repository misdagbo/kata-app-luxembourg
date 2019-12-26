import { Component, OnInit, OnDestroy } from "@angular/core";
import { MedicamentsService } from "./medicaments.service";
import { Subscription } from "rxjs";
import { Medicament } from 'src/app/shared/models/medicament.model';

@Component({
  selector: "app-medicaments",
  templateUrl: "./medicaments.component.html",
  styleUrls: ["./medicaments.component.scss"]
})
export class MedicamentsComponent implements OnInit, OnDestroy {
  subMedoc: Subscription;
  medicaments: Medicament[];
  editMode = false;
  constructor(private medicamentService: MedicamentsService) {}

  ngOnInit() {
    this.medicaments = this.medicamentService.getMedicaments();
    this.subMedoc = this.medicamentService.mediamentsChanged.subscribe(
      (medocs: Medicament[]) => (this.medicaments = medocs)
    );
  }

  onEditMedicament(index: number) {
    this.medicamentService.indexMedicamentSelected.next(index);
  }

  ngOnDestroy() {
    this.subMedoc.unsubscribe();
  }
}
