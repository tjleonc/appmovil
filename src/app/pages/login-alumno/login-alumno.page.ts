import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,sendPasswordResetEmail  } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { AlertController, NavController } from '@ionic/angular';
import { EmailValidator } from '@angular/forms';





@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  // Initialize Firebase
  asistenciaApp = initializeApp(environment.firebase);



  // Initialize Firebase Authentication and get a reference to the service
  asistenciaAppAuth = getAuth(this.asistenciaApp);

  pEmail = ""
  pPassword =""

  public alertButtons = [{
    text: 'Cancelar'
  },
    {
    text: 'Reset',
    handler:(data:any) => {
      this.resetPassword(data);
    }
  }];

  public alertInputs = [
    {
      name: 'email',
      placeholder: 'email',
      type: 'email',
    },
  ];


  constructor(private alertController: AlertController, private navController: NavController) { }

  ngOnInit() {
  }

  loginProfesor() {
    // Intenta iniciar sesión con Firebase Authentication
    signInWithEmailAndPassword(this.asistenciaAppAuth, this.pEmail, this.pPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      
      // Verifica que el usuario exista y que tenga un UID válido
      if (user && user.uid) {
        // Solo navega a 'home-alumno' si el usuario es autenticado correctamente
        this.navController.navigateForward('home-alumno');
      } else {
        // Si por alguna razón el UID no es válido, muestra un error
        this.presentAlert("Error al iniciar sesión: Usuario inválido");
      }
    })
    .catch((error) => {
      // Captura el error y muestra un mensaje de alerta
      const errorMessage = error.message;
      this.presentAlert(`Error al iniciar sesión: ${errorMessage}`);
      
      // No navega a ninguna otra página, se queda en la página de login
    });
  }
  
  
  resetPassword(data:any){
    console.log(data);
    sendPasswordResetEmail(this.asistenciaAppAuth, data.email)
  .then(() => {
    // Password reset email sent!
    // ..
    this.presentAlert("Se ha enviado un correo para restablecer la contraseña")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
async presentAlert(msg:string) {
  const alert = await this.alertController.create({
    header: 'Email Enviado',
    message: msg,
    buttons: ['Aceptar'],
  });

  await alert.present();
}
}
