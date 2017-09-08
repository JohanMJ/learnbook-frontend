import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { DataService } from './data.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { EqualValidator } from './create-user/create-user.password.match.directive';
import {enableProdMode} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UsersComponent,
    CreateUserComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
