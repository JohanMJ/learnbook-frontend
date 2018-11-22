import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css'],
})

export class CoursesPaidComponent implements OnInit {
  currentUser: User;
  courses= [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;

  constructor(private dataService: DataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => {
      this.courses = courses;   
    });

    this.dataService.getCoursesFromUserGroup(this.currentUser.groupId).then(courses => {
      this.courses = this.courses.concat(courses);   
    });
  }

  ngOnInit(): void {

  }

}
