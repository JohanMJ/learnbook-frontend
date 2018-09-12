import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { CourseList } from '../../models/courseList';
import { DataService } from '../../data.service';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  currentUser: User;
  users: User[];
  courses: Course[];

  constructor(private dataService: DataService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
  }

  getUsers() {
     return this.dataService.getUsers().then(users => this.users = users);
  }
  getCourses() {
    console.log(Promise.resolve(this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses)));
    console.log(this.dataService.getUsers().then(users => this.users = users));
    return Promise.resolve(this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses));
 }

  ngOnInit(): void {
     this.getUsers();
     this.getCourses();
  }

}
