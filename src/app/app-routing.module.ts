import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// Import component
const routes: Routes = [
  { 
    path : " ", // TODO: localhost:4200/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Importa declaraciones,componentes, directivas, pipes
  exports: [RouterModule] //Solo se importan otros modulos
})
export class AppRoutingModule { }
