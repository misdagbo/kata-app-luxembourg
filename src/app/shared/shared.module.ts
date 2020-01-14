import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../routes/components.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations : [MainNavComponent],
  imports : [CommonModule, MaterialModule, ComponentsModule, AppRoutingModule],
  exports : [MainNavComponent, AppRoutingModule]
})
export class SharedModule {

}
