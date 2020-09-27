import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRegisterationPage } from './admin-registeration.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRegisterationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRegisterationPageRoutingModule {}
