import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder }
  from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController ) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
      'password': new FormControl("",Validators.required),
      'confirmarPassword': new FormControl("",Validators.required),}, {validator: RegistroPage.validarPassword
    });

   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          message: 'No debe haber campos vacios, Nombre sólo debe tener letras o Password no coincide',
          buttons: ['Aceptar'] 
        });
    
        await alert.present();
        return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password,
      confirmarPassword: f.confirmarPassword
    }
    localStorage.setItem('usuario',JSON.stringify(usuario))
    console.log('Ingresado');
    this.navCtrl.navigateRoot('inicio');
  }

  static validarPassword(cg: FormGroup): {[err: string]: any} {
    let password = cg.get('password');
    let confirmarPassword = cg.get('confirmarPassword');
    let rv: {[error: string]: any} = {};
    if ((password.touched || confirmarPassword.touched) && password.value !== confirmarPassword.value) {
      rv['error'] = true;
    }
    return rv;
  }

  
}
