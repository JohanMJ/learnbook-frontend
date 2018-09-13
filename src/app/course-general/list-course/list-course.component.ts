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
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent implements OnInit {
  courses: Course[];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.courses = new Array<Course>();
  }

  getCourses() {
    return this.dataService.getCourses().then(courses => this.courses = courses);
  }


  ngOnInit(): void {
    this.getCourses();
  }
}

