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
  templateUrl: './company-create-user.component.html',
  styleUrls: ['./company-create-user.component.css'],
})
export class CompanyCreateUserComponent implements OnInit {
  user = new User;
  submitted = false;
  currentUser: User;

  constructor(private dataService: DataService,
              private location: Location,
              private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

 private save(): void {
   this.user.companyId = this.currentUser.iCodUser;
   this.user.type = "ALUNO";
   this.dataService.create(this.user);
 }

 onSubmit() {
   this.submitted = true;
   this.save();
   this.router.navigate(['/user']);
 }

  goBack(): void {
    this.location.back();
  }

}
