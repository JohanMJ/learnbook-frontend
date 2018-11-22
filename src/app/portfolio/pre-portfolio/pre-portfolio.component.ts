import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './pre-portfolio.component.html',
  styleUrls: ['./pre-portfolio.component.css'],
})

export class PrePortfolio implements OnInit {
  currentUser: User;
  users = [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;
  id: number;


  constructor(private dataService: DataService,  private route: ActivatedRoute) {
    this.id = Number (this.route.snapshot.paramMap.get('iCodUser'));
    console.log(this.id);

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getUsers().then(users => this.users = users);
  }
  getCourses() {
    return this.dataService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    console.log(this.getCourses());
  }

}
