import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaPaPageRoutingModule } from './receta-pa-routing.module';

import { RecetaPaPage } from './receta-pa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaPaPageRoutingModule
  ],
  declarations: [RecetaPaPage]
})
export class RecetaPaPageModule {}
