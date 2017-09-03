import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class DataService {

  private usersUrl = 'http://localhost:8080/dev/user/';  // URL to web API
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  // Get all users
  getUsers(): Promise<User[]> {
    const url = `${this.usersUrl}/listAll`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getUser(iCodUser: number): Promise<User> {
    const url = `${this.usersUrl}/${iCodUser}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  create(user: User): Promise<User> {
        const url = `${this.usersUrl}/insert`;
    return this.http
      .post(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.iCodUser}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
