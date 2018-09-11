import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../user';
import { DataService } from '../../data.service';

import { ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})

export class UserDetailsComponent implements OnInit {

  user = new User() ;
  submitted = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dataService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

  onSubmit(): void {
    this.submitted = true;
    this.dataService.update(this.user);
  }

  delete(): void {
    this.dataService.delete(this.user.iCodUser).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
