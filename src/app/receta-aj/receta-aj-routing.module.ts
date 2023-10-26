import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaAjPage } from './receta-aj.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaAjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaAjPageRoutingModule {}
