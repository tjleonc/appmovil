import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-alumnos',
  templateUrl: './asistencia-alumnos.page.html',
  styleUrls: ['./asistencia-alumnos.page.scss'],
})
export class AsistenciaAlumnosPage implements OnInit {

  // Define la lista de asignaturas con sus respectivas asistencias
  asignaturas = [
    { nombre: 'Programación', codigo: 'PRO101', asistencia: 100, clasesAsistidas: 10, clasesTotales: 10 },
    { nombre: 'Matemáticas', codigo: 'MAT102', asistencia: 85, clasesAsistidas: 17, clasesTotales: 20 },
    { nombre: 'Lenguaje', codigo: 'LEN103', asistencia: 92, clasesAsistidas: 23, clasesTotales: 25 },
    { nombre: 'Base de Datos', codigo: 'BD104', asistencia: 88, clasesAsistidas: 22, clasesTotales: 25 },
    { nombre: 'Arquitectura', codigo: 'ARC105', asistencia: 75, clasesAsistidas: 15, clasesTotales: 20 },
    { nombre: 'Redes', codigo: 'RED106', asistencia: 95, clasesAsistidas: 19, clasesTotales: 20 },
    { nombre: 'Seguridad Informática', codigo: 'SI107', asistencia: 90, clasesAsistidas: 18, clasesTotales: 20 }
  ];
  constructor() { }

  ngOnInit() {
  }

}