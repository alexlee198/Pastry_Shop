import { Injectable } from '@angular/core';
import { Pastry } from '../../cake-models/pastry';

export interface CartItem {
  pastry: Pastry;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(pastry: Pastry, quantity: number = 1) {
    const existing = this.items.find(item => item.pastry.id === pastry.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ pastry, quantity });
    }
  }

  removeFromCart(pastryId: string | number) {
    this.items = this.items.filter(item => item.pastry.id !== pastryId);
  }

  updateQuantity(pastryId: string | number, quantity: number) {
    const item = this.items.find(i => i.pastry.id === pastryId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) this.removeFromCart(pastryId);
    }
  }

  clearCart() {
    this.items = [];
  }

  getCartItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.pastry.price * item.quantity, 0);
  }
}
