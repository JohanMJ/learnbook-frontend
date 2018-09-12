import { CreateUserComponent } from './user-general/create-user/create-user.component';
import { CreateCourseComponent } from './course-general/create-course/create-course.component';
import { UserDetailsComponent } from './user-general/user-details/user-details.component';
import { UsersComponent } from './user-general/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Authorizatioon

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
//import { RegisterComponent } from './user-general/register/index';
import { AuthGuard } from './auth-guard/index';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'user',  component: UsersComponent },
   { path: 'home/add', component: CreateUserComponent },
   { path: 'user/course/add', component: CreateCourseComponent },
   { path: 'detail/:iCodUser', component: UserDetailsComponent },

   { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
];

// Create the angular router service with the route - directive pairs listed above
export default RouterModule.forRoot(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
