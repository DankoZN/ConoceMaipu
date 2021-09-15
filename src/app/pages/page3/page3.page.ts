import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {


  usuario = {
    username:'',
    email:'',
    password:'',
    edad:'',
    nacionalidad:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    console.log('submit');
    console.log(this.usuario);

  }
}
