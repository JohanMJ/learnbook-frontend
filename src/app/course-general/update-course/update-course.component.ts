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
  course = new Course;
  submitted = false;
  currentUser;
  currentCourse;
  id;

  constructor(private dataService: DataService, private location: Location, private router: Router, private actRouter: ActivatedRoute) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
      this.id = this.actRouter.snapshot.paramMap.get('iCodCou');
      this.currentCourse = this.dataService.getCourseById(this.id).then(currentCourse => this.currentCourse = currentCourse);
     }


  ngOnInit() {

  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }

  private save(): void {
    let n = new Array<User>();
    let cat = new Category();
    cat.iCodCat = 1;
    cat.sNamCat = "SAP";

    if(this.course.sDifCou == "1"){
      this.course.sDifCou = "Iniciante";
    }
    n.push(this.currentUser);

    this.course.users = n;
    this.course.category = cat;

    this.dataService.updateCourse(this.course);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/user']);
  }

  goBack(): void {
    this.location.back();
  }








}
