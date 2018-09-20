import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import {
  Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input
} from '@angular/core';
import {
  NG_VALIDATORS, Validator,
  Validators, AbstractControl, ValidatorFn
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../models/category';
import { User } from '../../models/user';


@Component({
  selector: 'app-update-details-course',
  templateUrl: './update-details-course.component.html',
  styleUrls: ['./update-details-course.component.css'],
})
export class UpdateDetailsCourseComponent implements OnInit {
  currentCourse;
  currentCategory;
  currentUser;
  id: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('iCodCou'));
    // this.currentCourse = new Course();
    this.currentCategory = new Category();
    this.currentUser = new User();

  }

  getCourseById() {
    return this.dataService.getCourseById(this.id).then(currentCourse => this.currentCourse = currentCourse);

  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentCourse = this.getCourseById();
    if (this.currentCourse.sDifCou == "Iniciante"){
      this.currentCourse.sDifCou = 1;
    }
    console.log(this.getCourseById());


  }


  save(): void {
    let category = new Category();

    category.iCodCat = this.currentCourse.category.iCodCat;
    category.sNamCat = this.currentCourse.category.sNamCat;

    this.currentCourse.category = category;

    this.dataService.updateCourse(this.currentCourse);
  }

  onSubmit() {
    this.save();
    // this.router.navigate(['/user']);
  }




}
