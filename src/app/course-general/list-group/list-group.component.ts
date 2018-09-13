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



@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
})
export class ListGroupComponent implements OnInit {
  groups: Group[];




  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.groups = new Array<Group>();
  }

  getGroups() {
    return this.dataService.getGroups().then(groups => this.groups = groups);
  }


  ngOnInit(): void {
    this.getGroups();
  }
}

