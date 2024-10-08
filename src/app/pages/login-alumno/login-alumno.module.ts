import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAlumnoPageRoutingModule } from './login-alumno-routing.module';

import { LoginAlumnoPage } from './login-alumno.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAlumnoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoginAlumnoPage]
})
export class LoginAlumnoPageModule {}
