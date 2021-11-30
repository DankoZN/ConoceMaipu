import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://www.feriadosapp.com/api/holidays.json')
  }

}

