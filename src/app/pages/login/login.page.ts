import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder }
  from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })
   }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('Ingresado', 'true');
      this.navCtrl.navigateRoot('datos');
    }else{
      const alert = await this.alertController.create({
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
        });
        
        await alert.present();
        return;
    }
  }

  async obtenerNombre(){
    var usuario = localStorage.getItem('usuario.nombre');
    
  }

}
