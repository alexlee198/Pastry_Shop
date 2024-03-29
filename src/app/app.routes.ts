import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PastryCardComponent } from './pastry-card/pastry-card.component';
import { BuyCakeComponent } from './buy-cake/buy-cake.component';



export const routes: Routes = [
    
    {path:'pastry-card', component: PastryCardComponent},
    {path:'buy-cake/:id', component: BuyCakeComponent},
    {path:'**', component: ErrorPageComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes), RouterOutlet],
    exports: [RouterModule]
  })

  export class AppRoutesModule{

  }