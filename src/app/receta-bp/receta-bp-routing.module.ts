import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaBPPage } from './receta-bp.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaBPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaBPPageRoutingModule {}
