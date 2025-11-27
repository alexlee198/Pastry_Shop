import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pastry } from '../../cake-models/pastry';
import { Observable,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  export class CakeService {

  url: string = "assets/pastries.json";


  constructor(private http:HttpClient) {}

  getCakes(): Observable<Array<Pastry>> {
    return this.http.get<{ pastries: Array<Pastry> }>(this.url).pipe(
      map(res => res.pastries)  // unwrap pastries array
    );
  }

  // Get one pastry by ID
  getCake(id: string): Observable<Pastry | undefined> {
    return this.getCakes().pipe(
      map(cakes => cakes.find(c => c.id === id))
    );
  }

}


