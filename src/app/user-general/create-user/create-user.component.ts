import { User } from '../../models/user';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Directive, forwardRef, 
  Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn } from '@angular/forms';
  import { EqualValidator } from './create-user.password.match.directive';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user = new User;
  submitted = false;
  constructor(private dataService: DataService,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

 private save(): void {
   this.dataService.create(this.user);
 }

 onSubmit() {
   this.submitted = true;
   this.save();
   this.router.navigate(['/login']);
 }

  goBack(): void {
    this.location.back();
  }

  
}
