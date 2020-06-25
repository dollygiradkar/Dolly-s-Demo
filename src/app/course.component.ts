import {Component} from '@angular/core';
import {CourseService} from './course.service'
@Component({
    selector:'courses',
    template:`<h2>{{title}}</h2>
              <ul>
                <li *ngFor="let course of courses">
                  {{course}}
                </li>
              <ul>`

})
export class CoursesCompoment{
   title="Courses List";
   courses;
   constructor(service:CourseService){
        service =new CourseService();
        this.courses= service.getCourses();
   }
}