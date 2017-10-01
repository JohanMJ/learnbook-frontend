import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Authorizatioon

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './auth-guard/index';

const routes: Routes = [
   { path: '', redirectTo: 'user', pathMatch: 'full', canActivate: [AuthGuard] },
   { path: 'user',  component: UsersComponent },
   { path: 'user/add', component: CreateUserComponent },
   { path: 'detail/:iCodUser', component: UserDetailsComponent },

   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
