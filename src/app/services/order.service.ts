// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Order } from '../../cake-models/order';

// @Injectable({
//   providedIn: 'root'
// })
// export class OrderService {


//   url: string ="http://localhost:3000/orders";
//   constructor(private http:HttpClient) {}

//   getOrders():Observable<Array<Order>>{
//     return this.http.get<Array<Order>>(this.url)
//   }

//   getOrder(id: string){
//     return this.http.get(this.url+'/' + id)
//   }

//   addOrder(order: Order)  {
//     order.id = order.id.toString()
//     return this.http.post<Order>(this.url, JSON.stringify(order));
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../../cake-models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {}

  // Fake GET
  getOrders(): Observable<Array<Order>> {
    return of([]); // return empty array
  }

  // Fake GET one order
  getOrder(id: string): Observable<Order | null> {
    return of(null);
  }

  // Fake POST (simulate success)
  addOrder(order: Order): Observable<Order> {
    console.log("Order saved (simulated):", order);
    return of(order); // instantly return success
  }
}

