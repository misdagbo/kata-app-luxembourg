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
      let pertinence: number;
      pertinence = this.checkPertinence(symptomesChecked, maladie.symptomes);
      if (pertinence !== 0) {
        results.push({ maladie, pertinence });
      }
    }
    results.sort((a, b) => b.pertinence - a.pertinence);
    this.resultatsDiagnostic.next(results);
  }

  checkPertinence = function(source: Symptome[], cible: Symptome[]): number {
    if (cible.length === 0 || source.length === 0) {
      return 0;
    } else {
      let check: String[] = source
        .map(x => x.name)
        .filter(item => cible.map(x => x.name).includes(item));
      return check.length;
    }
  };
}
