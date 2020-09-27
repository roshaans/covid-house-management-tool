import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRegisterationPageRoutingModule } from './admin-registeration-routing.module';

import { AdminRegisterationPage } from './admin-registeration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRegisterationPageRoutingModule
  ],
  declarations: [AdminRegisterationPage]
})
export class AdminRegisterationPageModule {}
