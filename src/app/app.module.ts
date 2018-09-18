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
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';
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
//import { RegisterComponent } from './user-general/register/index';

//Correct

import { UserDetailsComponent } from './/user-general/user-details/user-details.component';
import { UsersComponent } from './user-general/users/users.component';
import { DataService } from './data.service';
import { CreateUserComponent } from './user-general/create-user/create-user.component';
import { CreateCourseComponent } from './course-general/create-course/create-course.component';
import { UpdateCourseComponent } from './course-general/update-course/update-course.component';

import { CreateGroupComponent } from './course-general/create-group/create-group.component';
import { CreateActivityComponent } from './activity-general/create-activity/create-activity.component';
import { ListGroupComponent } from './course-general/list-group/list-group.component';
import { ListCourseComponent } from './course-general/list-course/list-course.component';
import { DetailCourseComponent } from './course-general/detail-course/detail-course.component';
import { EqualValidator } from './user-general/create-user/create-user.password.match.directive';
import { SearchPipe } from './user-general/users/search-pipe.pipe';

import { UpdateDetailsCourseComponent } from './course-general/update-details-course/update-details-course.component';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        PDFExportModule,
        IntlModule,
        GridModule,
        PdfViewerModule,

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
       // RegisterComponent,
        UserDetailsComponent,
        UsersComponent,
        CreateUserComponent,
        CreateCourseComponent,
        CreateGroupComponent,
        CreateActivityComponent,
        UpdateCourseComponent,
        UpdateDetailsCourseComponent,
        ListGroupComponent,
        ListCourseComponent,
        DetailCourseComponent,
        EqualValidator,
        SearchPipe
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