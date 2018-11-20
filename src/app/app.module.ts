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

import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
 
// used to create fake backend
import { fakeBackendProvider } from './fake-backend/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
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
import { RemoveCourseComponent } from './course-general/remove-course/remove-course.component';

import { PortfolioStudents } from './portfolio/students/students.component';
import { PortfolioCompanies } from './portfolio/companies/companies.component';

import { PrePortfolio } from './portfolio/pre-portfolio/pre-portfolio.component';

import { PrePortfolioCompanies } from './portfolio/pre-portfolio-companies/pre-portfolio-companies.component';

import { Dashboards } from './portfolio/dashboard/dashboard.component';

import { CreateGroupComponent } from './course-general/create-group/create-group.component';
import { CreateActivityComponent } from './activity-general/create-activity/create-activity.component';
import { ListGroupComponent } from './course-general/list-group/list-group.component';
import { ListCourseComponent } from './course-general/list-course/list-course.component';
import { DetailCourseComponent } from './course-general/detail-course/detail-course.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxPaginationModule } from 'ngx-pagination';
import { EqualValidator } from './user-general/create-user/create-user.password.match.directive';
import { SearchPipe } from './user-general/users/search-pipe.pipe';
import { DinamicCourseComponent } from './course-general/dinamic-course/dinamic-course.component';



import { NgxSelectModule } from 'ngx-select-ex';

import { UpdateDetailsCourseComponent } from './course-general/update-details-course/update-details-course.component';
import { CoursesPaidComponent } from './course-general/paid-course/paid.component';
import { DetailPaidCourseComponent } from './course-general/detail-paid-course/detail-paid-course.component';
import { CompanyCreateUserComponent } from './user-general/company-create-user/company-create-user.component';
import { CompanyUsersComponent } from './user-general/company-user/company-user.component';
import { DetailGroupComponent } from './course-general/detail-group/detail-group.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        PDFExportModule,
        IntlModule,
        GridModule,
        PdfViewerModule,
        NgxCurrencyModule,
        NgxPaginationModule,
        NgxSelectModule,

    ],
    declarations: [
        AppComponent,
        DetailGroupComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        CompanyUsersComponent,
       // RegisterComponent,
        CompanyCreateUserComponent,
        UserDetailsComponent,
        UsersComponent,
        CreateUserComponent,
        CreateCourseComponent,
        CoursesPaidComponent,
        DetailPaidCourseComponent,
        CreateGroupComponent,
        CreateActivityComponent,
        UpdateCourseComponent,
        UpdateDetailsCourseComponent,
        RemoveCourseComponent,
        ListGroupComponent,
        ListCourseComponent,
        DetailCourseComponent,
        EqualValidator,
        SearchPipe,
        DinamicCourseComponent,
        PortfolioCompanies,
        PortfolioStudents,
        PrePortfolio,
        PrePortfolioCompanies,
        Dashboards,
        
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