import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Symptome } from "src/app/shared/models/symptome.model";
import { Subscription } from "rxjs";
import { SymptomesService } from "../symptomes.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-symptome-edit",
  templateUrl: "./symptome-edit.component.html",
  styleUrls: ["./symptome-edit.component.scss"]
})
export class SymptomeEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) editForm: NgForm;

  subSymptome: Subscription;
  selectedIndexSymptome: number;
  editSymptome: Symptome;
  editMode = false;

  constructor(private symptomeService: SymptomesService) {}

  ngOnInit() {
    this.subSymptome = this.symptomeService.seletedIndexSymptome.subscribe(
      (index: number) => {
        this.selectedIndexSymptome = index;
        this.editMode = true;
        this.editSymptome = this.symptomeService.getSymptome(index);
        this.editForm.setValue({
          name: this.editSymptome.name,
          description: this.editSymptome.description || null
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSymptome = new Symptome(value.name,value.description);
    if (this.editMode) {
      this.symptomeService.updateSymptome(this.selectedIndexSymptome, newSymptome);
    } else {
      this.symptomeService.addSymptome(newSymptome);
    }

    this.onClear();
  }

  onDelete() {
    this.symptomeService.deleteSymptome(this.selectedIndexSymptome);
    this.onClear();
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subSymptome.unsubscribe();
  }
}
