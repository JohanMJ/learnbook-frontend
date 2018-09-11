// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
 
// import { AlertService, AuthenticationService } from '../services/index';
// import { DataService } from '../data.service';
 
// @Component({
//     moduleId: module.id,
//     templateUrl: 'login.component.html'
// })
 
// export class LoginComponent implements OnInit {
//     model: any = {};
//     loading = false;
//     returnUrl: string;
 
//     constructor(
//         private route: ActivatedRoute,
//         private router: Router,
//         private authenticationService: DataService,
//         private alertService: AlertService) { }
 
//     ngOnInit() {
//         // reset login status
//         this.authenticationService.logout();
 
//         // get return url from route parameters or default to '/'
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//     }
 
//     login() {
//         this.loading = true;
//         this.authenticationService.authenticate(this.model.username, this.model.sPasUser)
//             .subscribe(
//                 data => {
//                     this.router.navigate([this.returnUrl]);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService, AuthenticationService } from '../services/index';
import { DataService } from '../data.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.sLogUser, this.model.sPasUser)
            .subscribe(
                data => {
                    this.router.navigate(['/user']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}