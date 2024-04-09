import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pastry } from '../../cake-models/pastry';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  export class CakeService {

  url: string ="http://localhost:3000/pastries";



  constructor(private http:HttpClient) {}

  getCakes():Observable<Array<Pastry>>{
    return this.http.get<Array<Pastry>>(this.url)
  }

  getCake(id: string){
    return this.http.get<Pastry>(this.url+'/' + id)
  }


}


