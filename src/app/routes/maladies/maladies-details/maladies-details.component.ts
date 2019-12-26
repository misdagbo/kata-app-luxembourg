import { Component, OnInit } from "@angular/core";
import { Maladie } from "src/app/shared/models/maladie.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MaladiesService } from "../maladies.service";

@Component({
  selector: "app-maladies-details",
  templateUrl: "./maladies-details.component.html",
  styleUrls: ["./maladies-details.component.scss"]
})
export class MaladiesDetailsComponent implements OnInit {
  maladie: Maladie;
  id: number;
  constructor(
    private maladieService: MaladiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.maladie = this.maladieService.getMaladie(this.id);
    });
  }

  onAddToSymptomesList() {
    this.maladieService.addToSymptomesList(this.maladie.symptomes);
  }

  onAddToMedicamentsList() {
    this.maladieService.addToMedicamentsList(this.maladie.medicaments);
  }

  onEditMaladie() {
    this.router.navigate(["edit"], {relativeTo: this.route});
  }

  onDeleteMaladie() {
    this.maladieService.deleteMaldie(this.id);
    this.router.navigate(['/maladies']);
  }

}
