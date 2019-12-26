import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medicament } from 'src/app/shared/models/medicament.model';
import { Subscription } from 'rxjs';
import { MedicamentsService } from '../medicaments.service';

@Component({
  selector: 'app-medicament-edit',
  templateUrl: './medicament-edit.component.html',
  styleUrls: ['./medicament-edit.component.scss']
})
export class MedicamentEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static : false}) editForm : NgForm;
  subMedoc : Subscription;
  medocSelected : Medicament;
  indexMedocSelected : number;
  editMode = false;

  constructor(private medocService : MedicamentsService) { }

  ngOnInit() {
    this.subMedoc = this.medocService.indexMedicamentSelected.subscribe(
      (index : number) => {
        this.indexMedocSelected = index;
        this.medocSelected = this.medocService.getMedicament(index);
        this.editMode = true;
        this.editForm.setValue({
          name : this.medocSelected.name,
          posologie : this.medocSelected.posologie,
          description : this.medocSelected.description || null
        })
      }
    )
  }

  onSubmit(form : NgForm) {
    const value = form.value;
    const newMedicament : Medicament = new Medicament(value.name, value.posologie, value.description);
    if(this.editMode) {
      this.medocService.updateMedicament(this.indexMedocSelected, newMedicament);
    } else {
      this.medocService.addMedicament(newMedicament);
    }

    this.onClear();
  }

  onDelete() {
    this.medocService.deleteMedicament(this.indexMedocSelected);
    this.onClear();
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }


  ngOnDestroy(){
    this.subMedoc.unsubscribe();
  }

}
