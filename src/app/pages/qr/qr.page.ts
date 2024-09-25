import { Component, OnInit } from '@angular/core';
  import * as QRCode from 'qrcode';

  @Component({
    selector: 'app-qr',
    templateUrl: './qr.page.html',
    styleUrls: ['./qr.page.scss'],
  })
  export class QrPage implements OnInit {

    qrData: string = '';  // Valor por defecto
    qrImage: string = '';  // Aquí se almacenará la imagen QR generada

    constructor() { }

    ngOnInit() {
    }
    generateQRCode() {
      QRCode.toDataURL(this.qrData)  // Generar el QR en formato de imagen base64
        .then(url => {
          this.qrImage = url;  // Guardar el resultado
        })
        .catch(err => {
          console.error('Error al generar QR', err);
        });
    }

  }
