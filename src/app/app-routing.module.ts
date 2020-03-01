import { PdvComponent } from './components/pdv/pdv.component';
import { AppComponent } from './app.component';
import { FluxoCaixaComponent } from './components/fluxo-caixa/fluxo-caixa.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'caixa/fluxo-caixa', component: FluxoCaixaComponent
  },
  {
    path: 'caixa/pdv', component: PdvComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/'
  },
  {
    path: '**', redirectTo: '/'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
