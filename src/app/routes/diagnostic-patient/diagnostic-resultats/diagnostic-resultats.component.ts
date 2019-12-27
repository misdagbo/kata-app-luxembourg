import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { DiagnosticService } from "../diagnostic.service";
import { Subscription } from "rxjs";
import { Symptome } from "src/app/shared/models/symptome.model";
import { MaladiesService } from "../../maladies/maladies.service";
import { ResultatItem } from "src/app/shared/models/resultat-item.model";

@Component({
  selector: "app-diagnostic-resultats",
  templateUrl: "./diagnostic-resultats.component.html",
  styleUrls: ["./diagnostic-resultats.component.scss"]
})
export class DiagnosticResultatsComponent implements OnInit, OnDestroy {
  subSymptomesChecked: Subscription;
  subResultatDiagnostic: Subscription;
  symptomesChecked: Symptome[];
  resultatsDiagnostic: ResultatItem[];
  constructor(private diagnosticService: DiagnosticService) {}

  ngOnInit() {
    this.subSymptomesChecked = this.diagnosticService.symptomesChecked.subscribe(
      (data: Symptome[]) => (this.symptomesChecked = data)
    );

    this.subResultatDiagnostic = this.diagnosticService.resultatsDiagnostic.subscribe(
      (data: ResultatItem[]) => {
        this.resultatsDiagnostic = data;
      }
    );
  }

  ngOnDestroy() {
    this.subResultatDiagnostic.unsubscribe();
    this.subSymptomesChecked.unsubscribe();
  }
}
