import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {
tabCourses: Course[] ;

  constructor(private courseServ: ListCoursesService) { }

  ngOnInit() {
    this.tabCourses=this.courseServ.getCourses();
  }
  
 
}
