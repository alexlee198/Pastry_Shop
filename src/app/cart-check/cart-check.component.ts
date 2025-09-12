import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Order } from '../../cake-models/order';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-check.component.html',
  styleUrls: ['./cart-check.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  submitted: boolean = false;
  orderSubmitted: Order | null = null;

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartService.getTotal();
  }

  increase(item: CartItem) {
    this.cartService.updateQuantity(item.pastry.id, item.quantity + 1);
    this.calculateTotal();
  }

  decrease(item: CartItem) {
    this.cartService.updateQuantity(item.pastry.id, item.quantity - 1);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  remove(item: CartItem) {
    this.cartService.removeFromCart(item.pastry.id);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  checkout(form: NgForm) {
    const order: Order = {
      id: Date.now().toString(),
      productName: this.cartItems.map(i => `${i.pastry.name} x${i.quantity}`).join(', '),
      name: form.value.name,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      address: form.value.address,
      quantity: this.cartItems.reduce((sum, i) => sum + i.quantity, 0),
      date: new Date().toDateString()
    };

    this.orderService.addOrder(order).subscribe(() => {
      this.submitted = true;
      this.orderSubmitted = order;
      this.cartService.clearCart();
      this.cartItems = [];
      this.total = 0;
    });
  }
}

