import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css'],
})

export class ListActivityComponent implements OnInit {
  currentUser: User;
  activities = [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;

  constructor(private dataService: DataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getActivitiesFromReview().then(activities => {
      this.activities = activities;   
    });
  }

  ngOnInit(): void {

  }

}
