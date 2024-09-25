import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {

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