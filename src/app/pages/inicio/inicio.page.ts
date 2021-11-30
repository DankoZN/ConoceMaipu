import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
  {
    icon:'camera-outline',
    name: 'Visita',
    redirecTo: '/page2'
  },
  {
    icon:'sunny-outline',
    name: 'Únete',
    redirecTo: '/page3'
  },
  
  {
    icon: 'log-in-outline', 
    name: 'Login', 
    redirecTo: '/login'
  },
  {
    icon: 'person-add', 
    name: 'Registro', 
    redirecTo: '/registro'
  },
  {
    icon: 'calendar-outline', 
    name: 'Feriados en Chile', 
    redirecTo: '/feriados'
  }

  ]
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){

    this.menuController.open('first');

  }

}
