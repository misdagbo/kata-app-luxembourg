import { Component, OnInit, Input } from '@angular/core';
import { Maladie } from 'src/app/shared/models/maladie.model';

@Component({
  selector: 'app-maladie-item',
  templateUrl: './maladie-item.component.html',
  styleUrls: ['./maladie-item.component.scss']
})
export class MaladieItemComponent implements OnInit {
  @Input() maladie : Maladie;
  @Input() index : number;

  constructor() { }

  ngOnInit() {

  }

}
