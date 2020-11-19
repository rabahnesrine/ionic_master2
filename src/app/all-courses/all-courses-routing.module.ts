import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCoursesPage } from './all-courses.page';

const routes: Routes = [
  {
    path: '',
    component: AllCoursesPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail-courses/detail-courses.module').then( m => m.DetailCoursesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCoursesPageRoutingModule {}
