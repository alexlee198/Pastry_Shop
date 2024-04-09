import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CakeService } from '../services/cake.service';
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
export class PastryCardComponent {

  panelOpenState = false;
  
  cakes: any[] = [];

  pastry: any;

  cakeSearch: string = ''

  selected: string = ''

  constructor(private cakeService: CakeService ) {}

 

  searchPastry() {
      this.cakeService.getCakes().subscribe((data) => {
        this.cakes = data.filter( cake => cake.name.toLowerCase().includes(this.cakeSearch) || cake.catergory.toLowerCase().includes(this.cakeSearch));
        this.cakeSearch = ""
      });
    }
  updateSorting(selected: any) {
      this.cakeService.getCakes().subscribe((data) => {
        this.cakes = data.filter( cake => cake.catergory === selected.target.value);
      });
    }


  ngOnInit(){
    this.cakeService.getCakes().subscribe((res: any) => {
      this.cakes = res;
    });
  }   
  
}
