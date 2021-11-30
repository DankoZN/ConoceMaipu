import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosService, Datos } from 'src/app/services/datos.service';
import { Platform,ToastController, IonList} from '@ionic/angular';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList;
  nombre: string;

  constructor(private storageService: DatosService,
    public alertController: AlertController, 
    private plt: Platform, private toastController: ToastController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      }); 
    }


  ngOnInit() {
    this.presentAlertConfirm();   

  }


  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });

  }

  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

  //update

  updateDatos(dato: Datos ){
    dato.nomLugar = `UPDATED: ${dato.nomLugar}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });

  }

  async presentAlertConfirm() {
    const input = await this.alertController.create({
      header:'Input',
      subHeader: 'Ingresa tu Nombre',
      inputs: [
        {
        name: 'txtNombre',
        type: 'text',
        placeholder: 'Ingresa tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
           
          }
        }, {
          text: 'OK',
          handler: (data)=> {
            console.log('Confirm OK');
            
            this.showToast('Bienvenido '+ data.txtNombre);
          }
        
        }
      ]
    });

    await input.present();
  
  }
}

  