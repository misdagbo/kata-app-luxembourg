import { NgModule } from "@angular/core";
import { MaladiesComponent } from "./maladies/maladies.component";
import { DiagnosticPatientComponent } from "./diagnostic-patient/diagnostic-patient.component";
import { SymptomesComponent } from "./symptomes/symptomes.component";
import { MedicamentsComponent } from "./medicaments/medicaments.component";
import { MaladiesListComponent } from "./maladies/maladies-list/maladies-list.component";
import { MaladieItemComponent } from "./maladies/maladies-list/maladie-item/maladie-item.component";
import { MaladiesDetailsComponent } from "./maladies/maladies-details/maladies-details.component";
import { MedicamentEditComponent } from "./medicaments/medicament-edit/medicament-edit.component";
import { MaladieEditComponent } from "./maladies/maladie-edit/maladie-edit.component";
import { SymptomeEditComponent } from "./symptomes/symptome-edit/symptome-edit.component";
import { MaladieStartComponent } from "./maladies/maladie-start/maladie-start.component";
import { DiagnosticResultatsComponent } from "./diagnostic-patient/diagnostic-resultats/diagnostic-resultats.component";
import { CommonModule } from "@angular/common";

import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/modules/material/material.module";
import { AppRoutingModule } from "../app-routing.module";

const COMPONENTS_ROUTES = [
  MaladiesComponent,
  DiagnosticPatientComponent,
  SymptomesComponent,
  MedicamentsComponent,
  MaladiesListComponent,
  MaladieItemComponent,
  MaladiesDetailsComponent,
  MedicamentEditComponent,
  MaladieEditComponent,
  SymptomeEditComponent,
  MaladieStartComponent,
  DiagnosticResultatsComponent
];

@NgModule({
  declarations: [...COMPONENTS_ROUTES],
  imports: [
    CommonModule,
    LayoutModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: []
})
export class ComponentsModule {}
