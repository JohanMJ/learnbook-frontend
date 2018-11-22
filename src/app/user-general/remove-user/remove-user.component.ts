import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
})

export class RemoveUserComponent implements OnInit {
  currentUser: User;
  users = [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;
  user: User;
  idGru: Number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.idGru = Number (this.route.snapshot.paramMap.get('iCodGru'));
    this.dataService.listAllByGroup(this.idGru).then(users => this.users = users);
  }

  addStudent(i : number) {
    this.dataService.getUser(i).then((user : User ) =>  {
        user.groupId = 0;
        this.dataService.update(user).then((user : User) => {
          this.user = user;
          window.location.href = "http://localhost:4200/detail/group/" + Number (this.route.snapshot.paramMap.get('iCodGru'));
        });
    });
  }

  getUsers() {
    return this.dataService.listAllByGroup(this.idGru).then(users => this.users = users);
  }

  ngOnInit(): void {
    console.log(this.getUsers());
  }

}
