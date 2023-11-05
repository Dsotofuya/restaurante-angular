import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';


@NgModule({
  declarations: [
    AddCategoriaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
