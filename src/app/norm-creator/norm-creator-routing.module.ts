import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormCreatorPage } from './norm-creator.page';

const routes: Routes = [
  {
    path: '',
    component: NormCreatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormCreatorPageRoutingModule {}
