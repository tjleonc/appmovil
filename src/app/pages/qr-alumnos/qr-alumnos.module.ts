import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrAlumnosPageRoutingModule } from './qr-alumnos-routing.module';

import { QrAlumnosPage } from './qr-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAlumnosPageRoutingModule
  ],
  declarations: [QrAlumnosPage]
})
export class QrAlumnosPageModule {}