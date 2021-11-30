import { Component, OnInit } from '@angular/core';
import { FeriadosService } from 'src/app/services/feriados.service';
import { Data } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados: Data[] = []

  constructor(private feriadosService:FeriadosService) { }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp=>{
      console.log('feriados', resp);
      this.feriados.push(...resp.data);
    });
  }

}
