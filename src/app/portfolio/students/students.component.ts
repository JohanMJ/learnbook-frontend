import { Course } from '../../models/course';
import { Activity } from '../../models/activity';
import { User } from '../../models/user';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class PortfolioStudents implements OnInit {
  currentUser: User;
  courses= [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;
  characters: Observable<any[]>;
columns: string[];
columnsb: string[];
id: number;


  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.id = Number (this.route.snapshot.paramMap.get('iCodUser'));
    console.log(this.id);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getCoursesFromUser(this.id).then(courses => this.courses = courses);
  }
  getCourses() {
    return this.dataService.getCoursesFromUser(this.id).then(courses => this.courses = courses);
  }

  ngOnInit(): void {
    console.log(this.getCourses());
    this.columns = ["iCodCou", "sNamCou", "fHorCou", "sDifCou"];
    this.columnsb = ["Código do Curso", "Nom. Curso", "Horas", "Dificuldade"];

    //["name", "age", "species", "occupation"]
  }
}



