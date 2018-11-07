import { Course } from '../../models/course';
import { Group } from '../../models/group';
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
import { element } from 'protractor';
import { User } from '../../models/user';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})
export class CreateGroupComponent implements OnInit {
  id: number;
  categories: Course[];
  categories2;
  group;
  submitted = false;
  courseOne: string;
  courseTwo: string;
  courseThree: string;
  courseFour: string;
  courseA: Course;
  courseB: Course;
  courseC: Course;
  courseD: Course;
  currentUser: User;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.group = new Group();
    this.categories2 = Array<Course>();
    this.courseA = new Course();
    this.courseB = new Course();
    this.courseC = new Course();
    this.courseD = new Course();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getCourses() {
    console.log(this.dataService.getCourses().then(categories => this.categories = categories));
    let courses = this.categories;

    if (typeof(courses) !== "undefined") {
      this.categories = new Array<Course>();
      this.categories2 = Array<Course>();

      courses.forEach(element => {
        if (element.iCodCou.toString() === this.courseOne) {
          this.courseA = element;
        
        } else if (element.iCodCou.toString() === this.courseTwo) {
          this.courseB = element;
        
        } else if (element.iCodCou.toString() === this.courseThree) {
          this.courseC = element;
        
        } else if (element.iCodCou.toString() === this.courseFour) {
          this.courseD = element;
        
        } else {
          console.log('lolo');
          this.categories2.push(element);
        }
      });
    }
    //console.log(this.categories.length);
    console.log('lala');
    return this.categories2;

  }

  newGroup() {
    let courses = new Array<Course>();

    this.categories.forEach(element => {
      if (element.iCodCou.toString() === this.courseOne
        || element.iCodCou.toString() === this.courseTwo
        || element.iCodCou.toString() === this.courseThree
        || element.iCodCou.toString() === this.courseFour) {
        console.log(element.iCodCou);
        courses.push(element);
      }
    });
    console.log(courses);
    
    if (courses.length > 3) {
      this.group.dDesGru = 0.40;
    }

    this.group.courses = courses;
    this.group.user = this.currentUser;
    console.log(this.group);
    this.dataService.createGroup(this.group);
  }

  onSubmit() {
    this.submitted = true;
    this.newGroup();
    this.router.navigate(['user/group/listAll']);
  }

  ngOnInit(): void {
    this.getCourses();
  }
}

