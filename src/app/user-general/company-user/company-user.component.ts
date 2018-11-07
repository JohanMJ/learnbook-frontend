import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './company-user.component.html',
  styleUrls: ['./company-user.component.css'],
})

export class CompanyUsersComponent implements OnInit {
  currentUser: User;
  users = [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;

  constructor(private dataService: DataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.listAllByCompany(this.currentUser.iCodUser).then(users => this.users = users);
  }

  getUsers() {
    return this.dataService.listAllByCompany(this.currentUser.iCodUser).then(users => this.users = users);
  }

  ngOnInit(): void {
    console.log(this.getUsers());
  }

}
