import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})

export class AddUserComponent implements OnInit {
  currentUser: User;
  users = [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;
  user: User;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.listAllByCompany(this.currentUser.iCodUser).then(users => this.users = users);
  }

  addStudent(i : number) {
    this.dataService.getUser(i).then((user : User ) =>  {
        user.groupId = Number (this.route.snapshot.paramMap.get('iCodGru'));
        this.dataService.update(user).then((user : User) => {
          this.user = user;
          this.user = user;
          window.location.href = "http://localhost:4200/detail/group/" + Number (this.route.snapshot.paramMap.get('iCodGru'));
      });
    });
  }

  getUsers() {
    return this.dataService.listAllByCompany(this.currentUser.iCodUser).then(users => this.users = users);
  }

  ngOnInit(): void {
    console.log(this.getUsers());
  }

}
