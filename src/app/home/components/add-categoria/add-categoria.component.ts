import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})

export class AddCategoriaComponent {
  nombreCategoria: string = '';
  @ViewChild ('bio') bio : any;

  constructor(private http : HttpClient){
    console.log(this.bio);
  }

  addCategoria(event: Event){
    event.preventDefault();
    this.http.post('http://localhost:8081/restaurante/categoria/add', {
      "nombre": this.nombreCategoria,
    }).subscribe({next: (data) => {
      alert(data);
    }, error: (error) => {
      alert(error);
    }})
  }
}
