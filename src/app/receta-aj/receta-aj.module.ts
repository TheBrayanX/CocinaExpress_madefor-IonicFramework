import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaAjPageRoutingModule } from './receta-aj-routing.module';

import { RecetaAjPage } from './receta-aj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaAjPageRoutingModule
  ],
  declarations: [RecetaAjPage]
})
export class RecetaAjPageModule {}
