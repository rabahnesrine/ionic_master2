import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'all',
    loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'new-courses',
    loadChildren: () => import('./new-courses/new-courses.module').then( m => m.NewCoursesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
