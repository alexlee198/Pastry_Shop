import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CakeService } from '../services/cake.service';
import { CartService } from '../services/cart.service';
import { Pastry } from '../../cake-models/pastry';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-pastry-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule,RouterLink, FormsModule, MatInputModule,MatSelectModule,MatFormFieldModule,MatExpansionModule],
  templateUrl: './pastry-card.component.html',
  styleUrl: './pastry-card.component.css',
})
export class PastryCardComponent implements OnInit {

  panelOpenState = false;
  
  cakes: Pastry[] = [];
  allCakes: Pastry[] = [];

  cakeSearch: string = ''

  selected: string = ''

  constructor(private cakeService: CakeService, private cartService: CartService, private router: Router ) {}

  ngOnInit(){
    this.cakeService.getCakes().subscribe((res: Pastry[]) => {
      this.cakes = res;
      this.allCakes = res;
    });
  }   


  addToCart(pastry: Pastry) {
    this.cartService.addToCart(pastry, 1);
    alert(`${pastry.name} added to cart`);
  }

  showAllPastries() {
    this.cakes = this.allCakes;
  }


  searchPastry() {
      this.cakeService.getCakes().subscribe((data: Pastry[]) => {
    const term = this.cakeSearch.toLowerCase();
    this.cakes = data.filter(cake =>
      cake.name.toLowerCase().includes(term) ||
      cake.category.toLowerCase().includes(term)
    );
    this.cakeSearch = "";
  });
}



    updateSorting(selected: any) {
    const category = selected.target.value;
    if (!category) {
      this.cakes = this.allCakes; // show all if no category
    } else {
      this.cakes = this.allCakes.filter(cake => cake.category === category);
    }
  }
 
  
}
