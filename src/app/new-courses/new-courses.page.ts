import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.page.html',
  styleUrls: ['./new-courses.page.scss'],
})
export class NewCoursesPage implements OnInit {

  constructor(private courseServ: ListCoursesService) { 

  }

  ngOnInit() {
  }
  addCourses(newCours) {
    newCours.keywords=newCours.keywords.split(',');
    this.courseServ.addCourses(newCours);
   console.log("tableau:"+newCours.keywords);
    
    }
}
