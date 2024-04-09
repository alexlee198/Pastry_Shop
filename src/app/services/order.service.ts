import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../cake-models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  url: string ="http://localhost:3000/orders";
  constructor(private http:HttpClient) {}

  getOrders():Observable<Array<Order>>{
    return this.http.get<Array<Order>>(this.url)
  }

  getOrder(id: string){
    return this.http.get(this.url+'/' + id)
  }

  addOrder(order: Order)  {
    order.id = order.id.toString()
    return this.http.post<Order>(this.url, JSON.stringify(order));
  }
}
