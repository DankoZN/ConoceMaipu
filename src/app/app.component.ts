import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] =[
    {
      icon: 'camera-outline',
      name: 'Visita', 
      redirecTo: '/page2'
    },
    {
      icon: 'sunny-outline', 
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
    },
  ]
  constructor(private menuController: MenuController) {}

  ngOnInit() {

  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
