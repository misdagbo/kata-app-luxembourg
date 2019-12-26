import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiagnosticPatientComponent } from './routes/diagnostic-patient/diagnostic-patient.component';
import { MaladiesComponent } from './routes/maladies/maladies.component';
import { MaladieStartComponent } from './routes/maladies/maladie-start/maladie-start.component';
import { MaladieEditComponent } from './routes/maladies/maladie-edit/maladie-edit.component';
import { MaladiesDetailsComponent } from './routes/maladies/maladies-details/maladies-details.component';
import { SymptomesComponent } from './routes/symptomes/symptomes.component';
import { MedicamentsComponent } from './routes/medicaments/medicaments.component';

const routes: Routes = [
  { path: "", redirectTo: "diagnostic", pathMatch: "full" },
  { path: "diagnostic", component: DiagnosticPatientComponent },
  {
    path: "maladies",
    component: MaladiesComponent,
    children: [
      { path: "", component: MaladieStartComponent },
      { path: "new", component: MaladieEditComponent },
      { path: ":id", component: MaladiesDetailsComponent },
      { path: ":id/edit", component: MaladieEditComponent }
    ]
  },
  { path: "symptomes", component: SymptomesComponent },
  { path: "medicaments", component: MedicamentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
