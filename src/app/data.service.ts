import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from './models/user';
import { Course } from './models/course';
import { Group } from './models/group';
import { Activity } from './models/activity';

@Injectable()
export class DataService {

  private usersUrl = 'http://localhost:8080/dev/user';  // URL to web API
  private courseUrl = 'http://localhost:8080/dev/course';  // URL to web API
  private groupUrl = 'http://localhost:8080/dev/group';  // URL to web API
  private activityUrl = 'http://localhost:8080/dev/activity';  // URL to web API
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
    const url = `${this.usersUrl}/get/${iCodUser}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  getGroup(iCodGru: number): Promise<Group> {
    const url = `${this.groupUrl}/get/${iCodGru}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Group)
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
    const url = `${this.usersUrl}/update`;
    return this.http
      .post(url, JSON.stringify(user), { headers: this.headers })
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

  authenticate(sLogUser: String, sPasUser: String) {
    const url = `${this.usersUrl}/${sLogUser}/${sPasUser}`;
    return this.http.get(url).map((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json();
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }


  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  createCourse(course: Course): Promise<Course> {
    const url = `${this.courseUrl}/insert`;
    return this.http
      .post(url, JSON.stringify(course), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Course)
      .catch(this.handleError);
  }

  getCoursesFromUser(iCodUser: number): Promise<Course[]> {
    const url = `${this.courseUrl}/list/${iCodUser}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  getCoursesByGroup(iCodGru: number): Promise<Course[]> {
    const url = `${this.courseUrl}/list/group/${iCodGru}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  getCourseById(iCodCourse: number): Promise<Course> {
    const url = `${this.courseUrl}/list/single/${iCodCourse}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Course)
      .catch(this.handleError);
  }

  getCourses(): Promise<Course[]> {
    const url = `${this.courseUrl}/listAll`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }

  createGroup(group: Group): Promise<Group> {
    const url = `${this.groupUrl}/insert`;
    return this.http
      .post(url, JSON.stringify(group), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Group)
      .catch(this.handleError);
  }

  // Get all users
  getGroups(): Promise<Group[]> {
    const url = `${this.groupUrl}/listAll`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Group[])
      .catch(this.handleError);
  }

  listAllByCompany(iCodUser: Number): Promise<User[]> {
    const url = `${this.usersUrl}/listAll/${iCodUser}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  listAllCompanies(): Promise<User[]> {
    const url = `${this.usersUrl}/listAllCompanies`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getGroupsByUser(iCodUser: number): Promise<Group[]> {
    const url = `${this.groupUrl}/listAll/${iCodUser}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Group[])
      .catch(this.handleError);
  }
  
  createActivity(activity: Activity) {
    const url = `${this.activityUrl}/insert`;
    let body = JSON.stringify(activity);
    return this.http
      .post(url, body, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Activity)
      .catch(this.handleError);
  }

  getActivitiesFromCourse(iCodCou: number) {
    const url = `${this.activityUrl}/list/${iCodCou}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Activity[])
      .catch(this.handleError);
  }

  getProgress(iCodCou: number) {
    const url = `${this.courseUrl}/progress/${iCodCou}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as number)
      .catch(this.handleError);
  }

  updateActivity(activity: Activity): Promise<void> {
    console.log(activity);
    const url = `${this.activityUrl}/finish`;
    console.log(url);
    return this.http
      .put(url, JSON.stringify(activity), { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateCourse(course: Course): Promise<Course> {
    const url = `${this.courseUrl}/update`;
    return this.http
      .put(url, JSON.stringify(course), { headers: this.headers })
      .toPromise()
      .then(response => response.json() as Course)
      .catch(this.handleError);
  }

  removeCourse(course: Course): Promise<Course> {
    const url = `${this.courseUrl}/remove`;
    return this.http
      .put(url, JSON.stringify(course), { headers: this.headers })
      .toPromise()
      .then(response => response.json() as Course)
      .catch(this.handleError);
  }

  buyCourse(course: Course): Promise<String> {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const url = `http://localhost:8080/dev/course/buy/${currentUser.iCodUser}`;

    return this.http
      .post(url, JSON.stringify(course), { headers: this.headers })
      .toPromise()
      .then(res => res.text() as String)
      .catch(this.handleError);
  }
  getCoursesByQtdUser(): Promise<Course[]> {
    const url = `${this.courseUrl}/required`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Course[])
      .catch(this.handleError);
  }


}
