import { Component } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { OrderService } from '../services/order.service';
import { Order } from '../../cake-models/order';
import { Pastry } from '../../cake-models/pastry';

@Component({
  selector: 'app-buy-cake',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatIcon,
  ],
  templateUrl: './buy-cake.component.html',
  styleUrl: './buy-cake.component.css',
})
export class BuyCakeComponent {
  id: any;
  pastry: Pastry = {
    id: '',
    img: '',
    name: '',
    category: '',
    price: 0,
  };

  submitted: boolean = false;

  orderSubmitted: Order = {
    id: '',
    productName: '',
    name: '',
    email: '',
    phoneNumber: 123 - 123 - 1234,
    address: '',
    quantity: 0,
    date: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private router: Router,
    private orderService: OrderService
  ) {}

  saveOrder(form: NgForm) {
    console.log('checked', form.value.checked);

    const order: Order = {
      id: this.id,

      productName: this.pastry.name,
      name: form.value.name,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      address: form.value.address,
      quantity: form.value.quantity,
      date: new Date().toDateString(),
    };

    console.log('form', form);

    console.log(order);
    this.orderService.addOrder(order).subscribe((data) => {
      this.submitted = true;
      this.orderSubmitted = order;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');

      this.cakeService
        .getCake(this.id.toString())
        .subscribe((data: Pastry | undefined) => {
          if (data) {
            this.pastry = data;
          } else {
            console.error('Pastry not found!');
          }
        });
    });
  }
}
