import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesPaisComponent } from './modules/paises/detalhes-pais/detalhes-pais.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/paises/paises.module').then(m => m.PaisesModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
