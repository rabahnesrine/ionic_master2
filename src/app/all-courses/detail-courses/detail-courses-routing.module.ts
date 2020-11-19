import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCoursesPage } from './detail-courses.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCoursesPageRoutingModule {}
