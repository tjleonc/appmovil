import { Component, OnInit } from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vinculos:Itemlist[]=[{
    ruta:'/qr',
    titulo:'Apps moviles ',
    icono:'caret-forward-sharp'
  },
    {
      ruta:'/qr',
      titulo:'Apps moviles seccion 2',
      icono:'caret-forward-sharp'

  },
  {
    ruta:'/qr',
    titulo:'Apps moviles seccion 3',
    icono:'caret-forward-sharp'
  },
  {
    ruta:'/qr',
    titulo:'Apps moviles seccion 4',
    icono:'caret-forward-sharp'
  }
];

}
