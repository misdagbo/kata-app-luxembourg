import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Symptome } from 'src/app/shared/models/symptome.model';

@Injectable({
  providedIn: 'root'
})
export class SymptomesService {
  symptomesChanched = new Subject<Symptome[]>();
  seletedIndexSymptome = new Subject<number>();


  private symptomes: Symptome[] = [
    new Symptome('Céphalé', 'mal de tête'),
    new Symptome('Douleur yeux', 'maux au niveaux des yeux'),
    new Symptome('Pulsation', 'avoir des ressentiments'),
    new Symptome('Nausées', 'envie de vomir'),
    new Symptome('Vomissements', "rendre ce qu'on a dans le ventre"),
    new Symptome('Sensibilité lumière', 'vision difficile quand densité lumière  forte'),
    new Symptome('Sensibilité bruit', 'nuisance sonore inacceptable')
  ];

  constructor() { }

  public getSymptomes() : Symptome[] {
    return [...this.symptomes];
  }

  public getSymptome(index : number) : Symptome {
    return [...this.symptomes][index];
  }

  public addSymptomes(symps : Symptome[]) {
    this.symptomes.push(...symps);
    this.symptomesChanched.next([...this.symptomes]);
  }

  public addSymptome(newsymp : Symptome) {
    this.symptomes.push(newsymp);
    this.symptomesChanched.next([...this.symptomes]);
  }

  public updateSymptome(index : number, newSymp : Symptome){
    this.symptomes[index] = newSymp;
    this.symptomesChanched.next([...this.symptomes]);
  }

  public deleteSymptome(index : number) {
    this.symptomes.splice(index, 1);
    this.symptomesChanched.next([...this.symptomes]);
  }
}
