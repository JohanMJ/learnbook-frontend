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
  Validators, AbstractControl, ValidatorFn, FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { User } from '../../models/user';
import { ActivatedRoute, Params } from '@angular/router';
import { INgxSelectOption } from 'ngx-select-ex';




@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  public courses: Array<Course>;
  submitted = false;
  currentUser: User;
  selectedCourse: string;
  currentCourse: Course;
  id;

  public items: String[] = ['Amsterdam', 'Antwerp'];
  public ngxControl = new FormControl();
  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;

  constructor(private dataService: DataService, private location: Location, private router: Router, private actRouter: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);

  }

  ngOnDestroy(): void {
    clearTimeout(this._ngxDefaultTimeout);
    clearInterval(this._ngxDefaultInterval);
  }

  public doNgxDefault(): any {
    return this._ngxDefault;
  }

  public inputTyped = (source: string, text: string) => console.log('SingleDemoComponent.inputTyped', source, text);

  public doFocus = () => console.log('SingleDemoComponent.doFocus');

  public doBlur = () => console.log('SingleDemoComponent.doBlur');

  public doOpen = () => console.log('SingleDemoComponent.doOpen');

  public doClose = () => console.log('SingleDemoComponent.doClose');

  public doSelect = (value: any) => console.log('SingleDemoComponent.doSelect', value);

  public doRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);

  public doSelectOptions = (options: INgxSelectOption[]) => console.log('SingleDemoComponent.doSelectOptions', options);
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

    this.courses.forEach(element => {
      this.items.push(element.sNamCou);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.newDetails();
    // this.router.navigate(['/user/course/update/details/' + this.currentCourse.iCodCou]);
  }

  ngOnInit(): void {
    this.getCourses();
    this.getNameofCourses();
  }

  goBack(): void {
    this.location.back();
  }

  getNameofCourses(): void {
    let course = new Course();
  
    this.courses.forEach(element => {
      this.items.push(element.sNamCou);
    });
  }








}
