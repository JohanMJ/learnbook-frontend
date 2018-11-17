import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs/operator/toArray';

@Component({
  selector: 'app-remove-course',
  templateUrl: './remove-course.component.html',
  styleUrls: ['./remove-course.component.css'],
})
export class RemoveCourseComponent implements OnInit {
  courses: Course[] = [];
  submitted = false;
  currentUser: User;
  selectedCourse: string;
  currentCourse: Course;
  id;

  constructor(private dataService: DataService, private location: Location, private router: Router, private actRouter: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }

  getCourses() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }

  removeCourse() {

    let course = new Course();

    this.courses.forEach(element => {
      if (element.iCodCou.toString() === this.selectedCourse) {
        course = element;
      }
    });
    this.currentCourse = course;
    
    this.dataService.removeCourse(this.currentCourse);
  }

  onSubmit() {
    this.submitted = true;
    this.removeCourse();
    this.router.navigate(['/user/']);
  }

  ngOnInit(): void {
    this.getCourses();
    console.log(this.courses);
    console.log(this.currentCourse);

  }

  goBack(): void {
    this.location.back();
  }








}
