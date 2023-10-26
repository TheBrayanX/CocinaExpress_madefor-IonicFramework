import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaCbPageRoutingModule } from './receta-cb-routing.module';

import { RecetaCbPage } from './receta-cb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaCbPageRoutingModule
  ],
  declarations: [RecetaCbPage]
})
export class RecetaCbPageModule {}
