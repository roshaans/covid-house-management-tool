import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormCreatorPageRoutingModule } from './norm-creator-routing.module';

import { NormCreatorPage } from './norm-creator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormCreatorPageRoutingModule
  ],
  declarations: [NormCreatorPage]
})
export class NormCreatorPageModule {}
