import { Course } from '../../models/course';
import { Activity } from '../../models/activity';
import { User } from '../../models/user';
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
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css'],
})
export class CreateActivityComponent implements OnInit {
  id: number;
  courses: Course[];
  activity;
  submitted = false;
  selectedCourse: string;
  currentUser: User;



  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.activity = new Activity();
  }

  getCourses() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }

  newActivity() {

    let course = new Course();

    this.courses.forEach(element => {
      if (element.iCodCou.toString() === this.selectedCourse) {
          course = element;
      }
    });
    this.activity.course = course;
    this.dataService.createActivity(this.activity);
  }

  onSubmit() {
    this.submitted = true;
    this.newActivity();
    this.router.navigate(['user']);
  }


  ngOnInit(): void {
    this.getCourses();
  }
}

