import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCoursesPageRoutingModule } from './detail-courses-routing.module';

import { DetailCoursesPage } from './detail-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCoursesPageRoutingModule
  ],
  declarations: [DetailCoursesPage]
})
export class DetailCoursesPageModule {}
