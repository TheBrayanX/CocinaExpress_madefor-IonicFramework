import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'receta-bp',
    loadChildren: () => import('./receta-bp/receta-bp.module').then( m => m.RecetaBPPageModule)
  },
  {
    path: 'receta-ch',
    loadChildren: () => import('./receta-ch/receta-ch.module').then( m => m.RecetaCHPageModule)
  },
  {
    path: 'receta-ap',
    loadChildren: () => import('./receta-ap/receta-ap.module').then( m => m.RecetaAPPageModule)
  },
  {
    path: 'receta-aj',
    loadChildren: () => import('./receta-aj/receta-aj.module').then( m => m.RecetaAjPageModule)
  },
  {
    path: 'receta-cb',
    loadChildren: () => import('./receta-cb/receta-cb.module').then( m => m.RecetaCbPageModule)
  },
  {
    path: 'receta-pa',
    loadChildren: () => import('./receta-pa/receta-pa.module').then( m => m.RecetaPaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
