import { Maladie } from './maladie.model';

export class ResultatItem {
  constructor(public maladie : Maladie, public pertinence : number){}
}
