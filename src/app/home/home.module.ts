import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddCategoriaComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
