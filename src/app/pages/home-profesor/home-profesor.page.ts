import { Component, OnInit } from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {

  vinculos:Itemlist[]=[{
    ruta:'/asistencia',
    titulo:'Asistencia',
    icono:'people-sharp'
  },
    {
      ruta:'/ingresar-asignatura',
      titulo:'Ingresar Asignatura',
      icono:'add-circle-sharp'

  },
  {
    ruta:'/ver-asistencia',
    titulo:'Ver asistencia',
    icono:'search-sharp'

},
];
  constructor() { }

  ngOnInit() {
  }

}
