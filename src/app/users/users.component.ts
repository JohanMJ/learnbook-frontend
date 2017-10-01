import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { UserService } from '../services/index';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  currentUser: User;
  currentUser1: User;
  users: User[];

  constructor(private dataService: DataService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser1 = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    console.log(this.currentUser1);
    
  }

  getUsers() {
     return this.dataService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
     this.getUsers();
  }

}
