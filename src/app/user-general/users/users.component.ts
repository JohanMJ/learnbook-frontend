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
  pageNumber: number = 1;
  index: number = 0;

  constructor(private dataService: DataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getCourses().then(courses => this.courses = courses);
  }
  getCourses() {
    return this.dataService.getCourses().then(courses => this.courses = courses);
  }

  ngOnInit(): void {
    console.log(this.getCourses());
  }

}
