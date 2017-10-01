// import { AppRoutingModule } from './app-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

// import { AppComponent } from './app.component';
// import { UserDetailsComponent } from './user-details/user-details.component';
// import { UsersComponent } from './users/users.component';
// import { DataService } from './data.service';
// import { CreateUserComponent } from './create-user/create-user.component';
// import { EqualValidator } from './create-user/create-user.password.match.directive';
// import {enableProdMode} from '@angular/core';

// //Authorization - Learning


// @NgModule({
//   declarations: [
//     AppComponent,
//     UserDetailsComponent,
//     UsersComponent,
//     CreateUserComponent,
//     EqualValidator
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule,
//     AppRoutingModule
//   ],
//   providers: [DataService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
 
// used to create fake backend
import { fakeBackendProvider } from './fake-backend/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { AppRoutingModule }        from './app-routing.module';
 
import { AlertComponent } from './alert/index';
import { AuthGuard } from './auth-guard/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

//Correct

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { DataService } from './data.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { EqualValidator } from './create-user/create-user.password.match.directive';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserDetailsComponent,
        UsersComponent,
        CreateUserComponent,
        EqualValidator
    ],
    providers: [DataService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
 
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }