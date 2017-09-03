import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  users: User[];

  constructor(private dataService: DataService) {}

  getUsers() {
     return this.dataService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
     this.getUsers();
  }

}
