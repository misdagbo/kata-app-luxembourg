import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Maladie } from "src/app/shared/models/maladie.model";
import { MaladiesService } from "../maladies.service";

@Component({
  selector: "app-maladie-edit",
  templateUrl: "./maladie-edit.component.html",
  styleUrls: ["./maladie-edit.component.scss"]
})
export class MaladieEditComponent implements OnInit {
  maladieForm: FormGroup;
  id: number;
  editMode = false;
  maladie: Maladie;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private maladieService: MaladiesService
  ) {}

  get symptomes(): FormArray {
    return this.maladieForm.get("symptomes") as FormArray;
  }

  get symptomesControls() {
    return this.symptomes.controls;
  }

  get medicaments(): FormArray {
    return this.maladieForm.get("medicaments") as FormArray;
  }

  get medicamentsControls() {
    return this.medicaments.controls;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = !!params["id"];
      this.initForm();
    });
  }

  // *** debut Fonction d'initialisation du formulaire
  initForm() {
    let maladieName = "";
    let maladieDescription = "";
    let symptomes = new FormArray([]);
    let medicaments = new FormArray([]);

    if (this.editMode) {
      const maladie: Maladie = this.maladieService.getMaladie(this.id);
      this.maladie = maladie;
      maladieName = maladie.name;
      maladieDescription = maladie.description;
      if (maladie["symptomes"]) {
        for (let symp of maladie.symptomes) {
          symptomes.push(
            new FormGroup(
              {
                name: new FormControl(symp.name, Validators.required),
                description: new FormControl(symp.description)
              },
              Validators.required
            )
          );
        }
      }

      if (maladie["medicaments"]) {
        for (let medoc of maladie.medicaments) {
          medicaments.push(
            new FormGroup(
              {
                name: new FormControl(medoc.name, Validators.required),
                posologie: new FormControl(
                  medoc.posologie,
                  Validators.required
                ),
                description: new FormControl(medoc.description)
              },
              Validators.required
            )
          );
        }
      }
    } else {
      symptomes.push(
        new FormGroup({
          name: new FormControl(null, Validators.required),
          description: new FormControl(null)
        })
      );
      medicaments.push(
        new FormGroup({
          name: new FormControl(null, Validators.required),
          posologie: new FormControl(null, Validators.required),
          description: new FormControl(null)
        })
      );
    }
    this.maladieForm = new FormGroup({
      name: new FormControl(maladieName, Validators.required),
      symptomes: symptomes,
      medicaments: medicaments,
      description: new FormControl(maladieDescription)
    });
  }

  // *** fin Fonction d'initialisation du formulaire

  onAddNewSymptome() {
    this.symptomes.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        description: new FormControl(null)
      })
    );
  }

  onAddNewMedicament() {
    this.medicaments.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        posologie: new FormControl(null, Validators.required),
        description: new FormControl(null)
      })
    );
  }

  onSubmit() {
    if(this.editMode) {
      this.maladieService.updateMaladie(this.id, this.maladieForm.value);
      this.router.navigate(["../"], {relativeTo: this.route});
    } else {
      this.maladieService.addMaladie(this.maladieForm.value);
      this.router.navigate(["../"], {relativeTo: this.route});
    }
  }

  onCancel() {
    this.router.navigate(["../"]);
  }

}
