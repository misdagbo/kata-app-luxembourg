import { Injectable } from "@angular/core";
import { Subject, Observable, of } from "rxjs";
import { MaladiesService } from "../maladies/maladies.service";
import { Symptome } from "src/app/shared/models/symptome.model";
import { Maladie } from "src/app/shared/models/maladie.model";
import { ResultatItem } from "src/app/shared/models/resultat-item.model";

@Injectable({
  providedIn: "root"
})
export class DiagnosticService {
  isDiagnostic = new Subject<boolean>();
  symptomesChecked = new Subject<Symptome[]>();
  resultatsDiagnostic = new Subject<ResultatItem[]>();
  constructor(private maladieService: MaladiesService) {}

  diagnostic(symptomesChecked: Symptome[]) {
    let results: ResultatItem[] = [];
    let allMaladies = this.maladieService.getMaladies();
    for (let maladie of allMaladies) {
      let pertinence: number = this.checkPertinence(symptomesChecked, maladie.symptomes);
      if (!!pertinence) {
        results.push({ maladie, pertinence });
      }
    }
    results.sort((a, b) => b.pertinence - a.pertinence);
    this.resultatsDiagnostic.next(results);
  }

  checkPertinence = function(source: Symptome[], cible: Symptome[]): number {
    let check: Symptome[] = cible.filter(
      item => !!source.find(ooo => ooo.name === item.name)
    );
    return !!check ? check.length : 0;
  };
}
