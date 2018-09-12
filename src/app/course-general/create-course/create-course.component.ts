import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Directive, forwardRef, 
  Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn } from '@angular/forms';
  import { Router } from '@angular/router';

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
   this.dataService.create(this.course);
 }

 onSubmit() {
   this.submitted = true;
   this.save();
   this.router.navigate(['/login']);
 }

  goBack(): void {
    this.location.back();
  }

  
}
