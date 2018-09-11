import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    private usersUrl = 'http://localhost:8080/dev/user/login';  // URL to web API
    private headers = new Headers({ 'Access-Control-Expose-Headers': 'Authorization' });
    constructor(private http: Http) { }
 
    login(username: string, password: string) {
        const url = `${this.usersUrl}/${username}`;
        console.log(password);
        return this.http.get(url, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // console.log("here");
                // console.log( response.headers.values);
               
                // // login successful if there's a jwt token in the response
                // console.log(response.headers);
                 let user = response.json();
                
                // console.log(response.headers);
                if (true) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log(user);
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}