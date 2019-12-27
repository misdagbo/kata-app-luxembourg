import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SymptomesService } from "../symptomes/symptomes.service";
import { DiagnosticService } from "./diagnostic.service";
import { Symptome } from "src/app/shared/models/symptome.model";

@Component({
  selector: "app-diagnostic-patient",
  templateUrl: "./diagnostic-patient.component.html",
  styleUrls: ["./diagnostic-patient.component.scss"]
})
export class DiagnosticPatientComponent implements OnInit {
  symptomes = new FormControl();
  symptomesList: Symptome[];
  symptomesChecked: Symptome[];

  constructor(
    private symptomeService: SymptomesService,
    private diagnosticService: DiagnosticService
  ) {}

  ngOnInit() {
    this.diagnosticService.isDiagnostic.next(false);
    this.symptomesList = this.symptomeService.getSymptomes();
    this.symptomes.valueChanges.subscribe(
      data =>  (this.symptomesChecked = data)
    );
  }

  onDiagnostic() {
    if(this.symptomesChecked) {
      this.diagnosticService.symptomesChecked.next(this.symptomesChecked);
      this.diagnosticService.diagnostic(this.symptomesChecked);
    }

  }
}
