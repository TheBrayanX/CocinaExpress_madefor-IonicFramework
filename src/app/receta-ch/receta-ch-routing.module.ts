import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaCHPage } from './receta-ch.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaCHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaCHPageRoutingModule {}
