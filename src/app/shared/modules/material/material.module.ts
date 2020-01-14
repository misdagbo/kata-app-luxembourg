import { NgModule } from "@angular/core";

import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

const MATERIAL_MODULES = [
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule
];

@NgModule({
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule {}
