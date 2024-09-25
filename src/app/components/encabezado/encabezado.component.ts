import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent  implements OnInit {
  titulo: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back(); // Navega a la página anterior
  }

}
