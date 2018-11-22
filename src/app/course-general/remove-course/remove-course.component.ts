import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'app/models/group';

@Component({
  selector: 'app-root',
  templateUrl: './remove-course.component.html',
  styleUrls: ['./remove-course.component.css'],
})

export class RemoveCourseComponent implements OnInit {
  currentUser: User;
  courses = [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;
  course: Course;
  idGru: number;
  group;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.idGru = Number (this.route.snapshot.paramMap.get('iCodGru'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getCoursesByGroup(this.idGru).then(courses => this.courses = courses);
  }
  
  getCourses() {
    return this.dataService.getCoursesByGroup(this.idGru).then(courses => this.courses = courses);
  }

  addCourse(i : number) {
    this.dataService.getCourseById(i).then((course : Course ) =>  {
      var id = Number (this.route.snapshot.paramMap.get('iCodGru'));
      this.dataService.getGroup(1).then((group : Group) => {
        course.group = group;
        this.dataService.updateCourse(course).then((course : Course) => {
          window.location.href = "http://localhost:4200/detail/group/" + id;
        });
      });
    });
  }

  ngOnInit(): void {
    console.log(this.getCourses());
  }

}
