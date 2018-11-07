import { CreateUserComponent } from './user-general/create-user/create-user.component';
import { CreateCourseComponent } from './course-general/create-course/create-course.component';
import { CreateGroupComponent } from './course-general/create-group/create-group.component';
import { CreateActivityComponent } from './activity-general/create-activity/create-activity.component';
import { UpdateCourseComponent } from './course-general/update-course/update-course.component';
import { RemoveCourseComponent } from './course-general/remove-course/remove-course.component';
import { UpdateDetailsCourseComponent } from './course-general/update-details-course/update-details-course.component';
import { ListGroupComponent } from './course-general/list-group/list-group.component';
import { ListCourseComponent } from './course-general/list-course/list-course.component';
import { DetailCourseComponent } from './course-general/detail-course/detail-course.component';
import { DinamicCourseComponent } from './course-general/dinamic-course/dinamic-course.component';
import { UserDetailsComponent } from './user-general/user-details/user-details.component';
import { UsersComponent } from './user-general/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { CoursesPaidComponent } from './course-general/paid-course/paid.component';
import { DetailPaidCourseComponent } from './course-general/detail-paid-course/detail-paid-course.component';
import { CompanyCreateUserComponent } from './user-general/company-create-user/company-create-user.component';
import { CompanyUsersComponent } from './user-general/company-user/company-user.component';
import { DetailGroupComponent } from './course-general/detail-group/detail-group.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'user',  component: UsersComponent },
   { path: 'home/add', component: CreateUserComponent },
   { path: 'user/add', component: CompanyCreateUserComponent },
   { path: 'user/listAll', component: CompanyUsersComponent },
   { path: 'user/group/add', component: CreateGroupComponent },
   { path: 'user/activity/add', component: CreateActivityComponent },
   { path: 'user/course/paid', component: CoursesPaidComponent },
   { path: 'user/course/paid/detail/course/:iCodCou', component: DetailPaidCourseComponent },
   { path: 'user/course/add', component: CreateCourseComponent },
   { path: 'user/course/update', component: UpdateCourseComponent },
   { path: 'user/course/remove', component: RemoveCourseComponent },
   { path: 'user/course/update/details/:iCodCou', component: UpdateDetailsCourseComponent },
   { path: 'user/course/add', component: CreateCourseComponent },
   { path: 'user/course/add', component: CreateCourseComponent },
   { path: 'detail/:iCodUser', component: UserDetailsComponent },
   { path: 'detail/course/:iCodCou', component: DetailCourseComponent },
   { path: 'detail/group/:iCodGru', component: DetailGroupComponent },
   { path: 'dinamic/course/:iCodCou', component: DinamicCourseComponent },
   { path: 'user/course/update/:iCodCou', component: UpdateCourseComponent },
   { path: 'user/group/listAll', component: ListGroupComponent },
   { path: 'home/course/listAll', component: ListCourseComponent },

   { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
];

// Create the angular router service with the route - directive pairs listed above
export default RouterModule.forRoot(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
