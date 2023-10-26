import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaCbPage } from './receta-cb.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaCbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaCbPageRoutingModule {}
