import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'listado', loadChildren: () => import('./pages/juegos/listado/listado.module').then(m => m.ListadoModule) }, { path: 'nuevo', loadChildren: () => import('./pages/juegos/nuevo/nuevo.module').then(m => m.NuevoModule) }, { path: 'details', loadChildren: () => import('./pages/juegos/details/details.module').then(m => m.DetailsModule) }, { path: 'edit', loadChildren: () => import('./pages/juegos/edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
