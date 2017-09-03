import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'user', pathMatch: 'full' },
   { path: 'user',  component: UsersComponent },
   { path: 'add', component: CreateUserComponent },
   { path: 'listCourses', component: CreateUserComponent },
   { path: 'detail/:iCodUser', component: UserDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
