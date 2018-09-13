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



@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
})
export class CreateGroupComponent implements OnInit {
  id: number;
  categories: Course[];
  group;
  submitted = false;
  courseOne: string;
  courseTwo: string;
  courseThree: string;



  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.group = new Group();
  }

  getCourses() {
    console.log(this.dataService.getCourses().then(categories => this.categories = categories));
    return this.dataService.getCourses().then(categories => this.categories = categories);

  }

  newGroup() {

    let courses = new Array<Course>();

    this.categories.forEach(element => {
      if (element.iCodCou.toString() === this.courseOne
        || element.iCodCou.toString() === this.courseTwo
        || element.iCodCou.toString() === this.courseThree) {
        console.log(element.iCodCou);
        courses.push(element);
      }
    });
    console.log(courses);
    this.group.courses = courses;
    console.log(this.group);
    this.dataService.createGroup(this.group);
  }

  onSubmit() {
    this.submitted = true;
    this.newGroup();
    this.router.navigate(['/group/listAll']);
  }


  ngOnInit(): void {
    this.getCourses();
  }
}

