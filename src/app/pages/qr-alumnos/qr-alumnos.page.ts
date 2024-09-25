import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-alumnos',
  templateUrl: './qr-alumnos.page.html',
  styleUrls: ['./qr-alumnos.page.scss'],
})
export class QrAlumnosPage {

  mensaje: string = '';
  qrValidado: boolean = false;

  constructor(private router: Router) { }

  mostrarMensaje(texto: string, exito: boolean) {
    this.qrValidado = exito;
    this.mensaje = texto;

    // Mostrar el mensaje por unos segundos
    setTimeout(() => {
      this.mensaje = '';
      this.router.navigate(['/registrar-asistencia']); // Volver a la página de registrar asistencia
    }, 3000);
  }
}
