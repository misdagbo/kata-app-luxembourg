import { Component, OnInit, OnDestroy } from '@angular/core';
import { Maladie } from 'src/app/shared/models/maladie.model';
import { Subscription } from 'rxjs';
import { MaladiesService } from '../maladies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maladies-list',
  templateUrl: './maladies-list.component.html',
  styleUrls: ['./maladies-list.component.scss']
})
export class MaladiesListComponent implements OnInit, OnDestroy {
  subMaladies : Subscription;
  maladies : Maladie[];

  constructor(private maladieService : MaladiesService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.maladies = this.maladieService.getMaladies();
    this.subMaladies = this.maladieService.maladiesChanged.subscribe(
      (maladies : Maladie[]) => this.maladies = maladies
    )
  }

  onNewMaladie() {
    this.router.navigate(["new"], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subMaladies.unsubscribe();
  }
}
