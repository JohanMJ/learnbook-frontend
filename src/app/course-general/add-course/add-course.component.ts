import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'app/models/group';

@Component({
  selector: 'app-root',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})

export class AddCourseComponent implements OnInit {
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
    this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }

  getCourses() {
    return this.dataService.getCoursesFromUser(this.currentUser.iCodUser).then(courses => this.courses = courses);
  }

  addCourse(i : number) {
    this.dataService.getCourseById(i).then((course : Course ) =>  {
      var id = Number (this.route.snapshot.paramMap.get('iCodGru'));
      this.dataService.getGroup(id).then((group : Group) => {
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
