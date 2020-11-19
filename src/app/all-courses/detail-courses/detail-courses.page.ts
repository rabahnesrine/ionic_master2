import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ListCoursesService } from 'src/app/list-courses.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-detail-courses',
  templateUrl: './detail-courses.page.html',
  styleUrls: ['./detail-courses.page.scss'],
})
export class DetailCoursesPage implements OnInit {
 public couId;
  c:Course; 
  constructor(private courseServ: ListCoursesService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this._Activatedroute.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.couId=id;
      console.log(this.couId);
      if(this.couId!=0 ){
       this.c = this.courseServ.getCoursesById(this.couId)
      console.log(this.c.intitule)
   } 
      
    })
    /* let id = parseInt(this.snapshot.paramMap.get('id'));
    this.couId=id; */

   /*  this._Activatedroute.params.subscribe(
      (cours : Params) => {
        this.courseServ.getCoursesById(cours['id']).subscribe(( cou : Course) => {
            this.c = cou;
          },
          (error) => {
            console.log('error with getPersonne')
          }
        )
      },
      (error) => {
        console.log('Absence de Route Parameters');
        
      }
    );
  } */
  }
  /* initialiser(){
    this.courseServ.getCoursesById(this._Activatedroute.snapshot.paramMap.get("id"))
    .subscribe((course)=>this.c=course)}

  }
   */

   

  


 
  

}
