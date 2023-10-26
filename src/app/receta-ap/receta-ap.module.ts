import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaAPPageRoutingModule } from './receta-ap-routing.module';

import { RecetaAPPage } from './receta-ap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaAPPageRoutingModule
  ],
  declarations: [RecetaAPPage]
})
export class RecetaAPPageModule {}
