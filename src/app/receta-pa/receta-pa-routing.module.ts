import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaPaPage } from './receta-pa.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaPaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaPaPageRoutingModule {}
