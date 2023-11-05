import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';

const routes: Routes = [
  {path: "add", component: AddCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
