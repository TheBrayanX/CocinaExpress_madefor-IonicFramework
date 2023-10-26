import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaBPPageRoutingModule } from './receta-bp-routing.module';

import { RecetaBPPage } from './receta-bp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaBPPageRoutingModule
  ],
  declarations: [RecetaBPPage]
})
export class RecetaBPPageModule {}
