import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaAPPage } from './receta-ap.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaAPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaAPPageRoutingModule {}
