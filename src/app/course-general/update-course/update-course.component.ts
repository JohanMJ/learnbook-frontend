import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  Directive, forwardRef,
  Attribute, OnChanges, SimpleChanges, Input
} from '@angular/core';
import {
  NG_VALIDATORS, Validator,
  Validators, AbstractControl, ValidatorFn
} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { User } from '../../models/user';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  courses: Course[];
  submitted = false;
  currentUser: User;
  selectedCourse: string;
  currentCourse: Course;
  id;

  constructor(private dataService: DataService, private location: Location, private router: Router, private actRouter: ActivatedRoute) {

  }

  getCourses() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }

  newDetails() {

    let course = new Course();

    this.courses.forEach(element => {
      if (element.iCodCou.toString() === this.selectedCourse) {
        course = element;
      }
    });
    this.currentCourse = course;
  }

  onSubmit() {
    this.submitted = true;
    this.newDetails();
    this.router.navigate(['/user/course/update/details/' + this.currentCourse.iCodCou]);
  }

  ngOnInit(): void {
    this.getCourses();
  }

  goBack(): void {
    this.location.back();
  }








}
