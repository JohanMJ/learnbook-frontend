import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
//import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
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
  title: string = '';
  hours: any;
  price: any;
  description: string = '';
  category: any;
  difficult: any;
  dataInicial: Date;
  dataFim: Date;

  showHoursRequiredError: boolean = false;
  showPriceRequiredError: boolean = false;
  showTitleRequiredError: boolean = false;
  showDescRequiredError: boolean = false;
  showCategoryRequiredError: boolean = false;
  showDifRequiredError: boolean = false;
  showDateIniRequiredError: boolean = false;
  showDateFinRequiredError: boolean = false;

  constructor(private dataService: DataService,
    private location: Location,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
    // this.course.category.iCodCat = null;
    this.course.sDifCou = null;
  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }

  private save(): void {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let n = new Array<User>();
    let cat = new Category();

    if (this.course.sDifCou == "1") {
      this.course.sDifCou = "Iniciante";
    }

    n.push(currentUser);

    if (this.category == "1") {
      cat.iCodCat = 1;
      cat.sNamCat = "SAP";
    }

    if (this.category == "2") {
      cat.iCodCat = 2;
      cat.sNamCat = "ORACLE";
    }

    this.course.users = n;
    this.course.category = cat;

    this.course.sNamCou = this.title;
    this.course.sDesCou = this.description;
    this.course.fPriCou = this.price;
    this.course.fHorCou = this.hours;
    this.course.sDifCou = this.difficult;
    this.course.dDatCou = this.dataInicial;
    this.course.dExpTimCou = this.dataFim;
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

    if (this.title === null || this.title === 'null') {
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

    if (this.description === null || this.description === 'null') {
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

    // if(this.course.dDateIni >= this.course.dDateFin){
    //   valid = false;
    //   this.showDateIniRequiredError = true;
    // }
    // if (this.dateIni === null ) {
    //   valid = false;
    //   this.showDateIniRequiredError = true;
    // }
    // if (this.dateFin === null ) {
    //   valid = false;
    //   this.showDateFinRequiredError = true;
    // }

    return valid;
  }

}
