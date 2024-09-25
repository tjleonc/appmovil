import { Component, OnInit } from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';

@Component({
  selector: 'app-home-alumnos',
  templateUrl: './home-alumnos.page.html',
  styleUrls: ['./home-alumnos.page.scss'],
})
export class HomeAlumnosPage implements OnInit {

  vinculos:Itemlist[]=[

    {
      ruta:'/registrar-asistencia',
      titulo:'Registrar asistencia',
      icono:'add-circle-sharp'

  },
  {
    ruta:'/asistencia-alumnos',
    titulo:'Ver mi asistencia',
    icono:'search-sharp'

},
];
  constructor() { }

  ngOnInit() {
  }

}
