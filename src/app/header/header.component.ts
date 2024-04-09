import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Pastry } from '../../cake-models/pastry';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatIcon, FormsModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title: any;

  pastries:Pastry[] = []
  
  cakeSearch: string = '';

  
}
