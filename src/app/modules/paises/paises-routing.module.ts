import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { DetalhesPaisComponent } from './detalhes-pais/detalhes-pais.component';

const routes: Routes = [
  { path: '', component: PaisesComponent },
  {path: 'name/:name', component: DetalhesPaisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
