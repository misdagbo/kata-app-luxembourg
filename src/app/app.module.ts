import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AppRoutingModule } from "./app-routing.module";
import { MaladiesComponent } from "./routes/maladies/maladies.component";
import { DiagnosticPatientComponent } from "./routes/diagnostic-patient/diagnostic-patient.component";
import { SymptomesComponent } from "./routes/symptomes/symptomes.component";
import { MedicamentsComponent } from "./routes/medicaments/medicaments.component";
import { MaladiesListComponent } from "./routes/maladies/maladies-list/maladies-list.component";
import { MaladieItemComponent } from "./routes/maladies/maladies-list/maladie-item/maladie-item.component";
import { MaladiesDetailsComponent } from "./routes/maladies/maladies-details/maladies-details.component";
import { MedicamentEditComponent } from "./routes/medicaments/medicament-edit/medicament-edit.component";
import { MaladieEditComponent } from "./routes/maladies/maladie-edit/maladie-edit.component";
import { MainNavComponent } from "./shared/components/main-nav/main-nav.component";
import { SymptomeEditComponent } from "./routes/symptomes/symptome-edit/symptome-edit.component";
import { MaladieStartComponent } from "./routes/maladies/maladie-start/maladie-start.component";
import { DiagnosticResultatsComponent } from "./routes/diagnostic-patient/diagnostic-resultats/diagnostic-resultats.component";

@NgModule({
  declarations: [
    AppComponent,
    MaladiesComponent,
    DiagnosticPatientComponent,
    SymptomesComponent,
    MedicamentsComponent,
    MaladiesListComponent,
    MaladieItemComponent,
    MaladiesDetailsComponent,
    MedicamentEditComponent,
    MaladieEditComponent,
    MainNavComponent,
    SymptomeEditComponent,
    MaladieStartComponent,
    DiagnosticResultatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
