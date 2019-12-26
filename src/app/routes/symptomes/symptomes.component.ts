import { Component, OnInit, OnDestroy } from "@angular/core";
import { SymptomesService } from "./symptomes.service";
import { Subscription } from "rxjs";
import { Symptome } from 'src/app/shared/models/symptome.model';

@Component({
  selector: "app-symptomes",
  templateUrl: "./symptomes.component.html",
  styleUrls: ["./symptomes.component.scss"]
})
export class SymptomesComponent implements OnInit, OnDestroy {
  symptomes: Symptome[];
  subSympChanged: Subscription;

  constructor(private symptomeService: SymptomesService) {}

  ngOnInit() {
    this.symptomes = this.symptomeService.getSymptomes();
    this.subSympChanged = this.symptomeService.symptomesChanched.subscribe(
      (symptomes: Symptome[]) => this.symptomes = symptomes
    );
  }

  onEditSymptome(index: number) {
    this.symptomeService.seletedIndexSymptome.next(index);
  }

  ngOnDestroy() {
    this.subSympChanged.unsubscribe();
  }
}
