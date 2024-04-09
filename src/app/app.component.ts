import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { CakeService } from './services/cake.service';
import { FooterComponent } from './footer/footer.component';





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,CommonModule,RouterLink,FooterComponent]
})
export class AppComponent {
  title = 'Pastry Shop';
  pastries: any
  
constructor(private cakeService: CakeService){}
 
}
