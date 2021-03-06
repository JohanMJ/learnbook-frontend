import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  currentUser: User;
  courses= [];
  searchTerm: any;
  index = 0;

  // Pagination control
  pageNumber = 1;

  constructor(private dataService: DataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }
  getCourses() {
    return this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }

  ngOnInit(): void {
    this.getCourses();
  }
}
