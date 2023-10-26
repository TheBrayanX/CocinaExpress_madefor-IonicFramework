import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaCHPageRoutingModule } from './receta-ch-routing.module';

import { RecetaCHPage } from './receta-ch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaCHPageRoutingModule
  ],
  declarations: [RecetaCHPage]
})
export class RecetaCHPageModule {}
