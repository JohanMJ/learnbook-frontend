import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  currentUser = new User;
  maxPrice = 500;

  // Aux variables
  title: string;
  hours: any;
  price: any;
  description: string;
  category: any;
  difficult: any;

  showHoursRequiredError = false;
  showPriceRequiredError = false;
  showTitleRequiredError = false;
  showDescRequiredError = false;
  showCategoryRequiredError = false;
  showDifRequiredError = false;

  constructor(
    private dataService: DataService,
    private location: Location,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.title = '';
    this.description = '';
    this.hours = null;
    this.price = null;
    this.category = null;
    this.difficult = null;
  }

  ngOnInit() {
    this.course.category.iCodCat = null;
    this.course.sDifCou = null;
  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }

  private save(): void {
    // console.log(this.course);
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let iUser = new Array<User>();
    let cat = new Category();
    cat.iCodCat = 1;
    cat.sNamCat = "SAP";

    if(this.course.sDifCou == "1"){
      this.course.sDifCou = "Iniciante";
    }
    iUser.push(currentUser);

    this.course.users = iUser;
    this.course.category = cat;

    this.course.sNamCou = this.title;
    this.course.sDesCou = this.description;
    this.course.fPriCou = this.price;
    this.course.fHorCou = this.hours;
    this.course.sDifCou = this.difficult;
    this.course.category = cat;

    this.dataService.createCourse(this.course);
  }

  onChangePrice(price) {
    if (price > this.maxPrice) {
        this.price = 500;
    }
  }

  onSubmit() {
    if (this.isValidForm()) {
        this.submitted = true;
        this.save();
        this.router.navigate(['/user']);
    }
  }

  goBack(): void {
    this.location.back();
  }

  isValidForm() {
    let valid = true;

    if (this.title === null || this.title === 'null' || this.title === '') {
        valid = false;
        this.showTitleRequiredError = true;
    }

    if (this.hours === null || this.hours === 'null') {
        valid = false;
        this.showHoursRequiredError = true;
    }

    if (this.price === null || this.price === 'null') {
        valid = false;
        this.showPriceRequiredError = true;
    }

    if (this.description === null || this.description === 'null' || this.title === '') {
        valid = false;
        this.showDescRequiredError = true;
    }

    if (this.category === null || this.category === 'null') {
        valid = false;
        this.showCategoryRequiredError = true;
    }

    if (this.difficult === null || this.difficult === 'null') {
        valid = false;
        this.showDifRequiredError = true;
    }

    return valid;
  }

}