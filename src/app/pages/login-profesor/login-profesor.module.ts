import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginProfesorPageRoutingModule } from './login-profesor-routing.module';

import { LoginProfesorPage } from './login-profesor.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginProfesorPageRoutingModule,
    ComponentsModule
],
  declarations: [LoginProfesorPage]
})
export class LoginProfesorPageModule {}
