import { Course } from '../../models/course';
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




@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})
export class CreateGroupComponent implements OnInit {
    currentCourse: Course;
    id: number;
    categories: User[];

    constructor(private dataService: DataService, private route: ActivatedRoute) {
      this.id = Number (this.route.snapshot.paramMap.get('iCodCou'));
    }
  
    getCourseById() {
      return this.dataService.getCourseById(this.id).then(currentCourse => this.currentCourse = currentCourse);
     
   }

   getUsers() {
    return this.dataService.getUsers().then(categories => this.categories = categories);
   
 }

  
    ngOnInit(): void {
      this.getUsers();
      console.log( this.dataService.getUsers().then(categories => this.categories = categories));

  }
}

