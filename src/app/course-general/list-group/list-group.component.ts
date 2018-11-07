import { Group } from '../../models/group';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import {
  Directive, forwardRef,
  Attribute, OnChanges, SimpleChanges, Input
} from '@angular/core';
import {
  NG_VALIDATORS, Validator,
  Validators, AbstractControl, ValidatorFn
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
})
export class ListGroupComponent implements OnInit {
  groups: Group[];
  currentUser: User;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.groups = new Array<Group>();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getGroups() {
    return this.dataService.getGroupsByUser(this.currentUser.iCodUser).then(groups => this.groups = groups);
  }

  ngOnInit(): void {
    this.getGroups();
  }
}

