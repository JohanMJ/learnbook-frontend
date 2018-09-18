import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import {
  Directive, forwardRef,
  Attribute, OnChanges, SimpleChanges, Input
} from '@angular/core';
import {
  NG_VALIDATORS, Validator,
  Validators, AbstractControl, ValidatorFn
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-update-details-course',
  templateUrl: './update-details-course.component.html',
  styleUrls: ['./update-details-course.component.css'],
})
export class UpdateDetailsCourseComponent implements OnInit {
  currentCourse: Course;
    id: number;

    constructor(private dataService: DataService, private route: ActivatedRoute) {
      this.id = Number (this.route.snapshot.paramMap.get('iCodCou'));
    }
  
    getCourseById() {
      return this.dataService.getCourseById(this.id).then(currentCourse => this.currentCourse = currentCourse);
     
   }
  
    ngOnInit(): void {
       console.log(this.getCourseById());
  }






}
