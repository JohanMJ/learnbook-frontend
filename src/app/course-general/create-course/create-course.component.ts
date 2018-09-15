import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { User } from '../../models/user';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  course = new Course;
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }

  private save(): void {
    // console.log(this.course);
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let n = new Array<User>();
    let cat = new Category();
    cat.iCodCat = 1;
    cat.sNamCat = "SAP";

    if(this.course.sDifCou == "1"){
      this.course.sDifCou = "Iniciante";
    }
    n.push(currentUser);

    this.course.users = n;
    this.course.category = cat;

    this.dataService.createCourse(this.course);
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
