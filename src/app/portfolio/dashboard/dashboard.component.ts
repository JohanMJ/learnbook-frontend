import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class Dashboards implements OnInit {
  currentUser: User;
  courses= [];
  searchTerm: any;
  pageNumber: number = 1;
  index: number = 0;
  characters: Observable<any[]>;
columns: string[];
columnsb: string[];
id: number;


  constructor(private dataService: DataService,  private route: ActivatedRoute) {
    this.id = Number (this.route.snapshot.paramMap.get('iCodUser'));
    console.log(this.id); 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.getCoursesByQtdUser().then(courses => this.courses = courses);
    // this.dataService.getCourses().then(courses => this.courses = courses);

  }
  getCourses() {
    return this.dataService.getCoursesByQtdUser().then(courses => this.courses = courses);
  }

  ngOnInit(): void {
    console.log(this.getCourses());
    this.columns = ["0", "1", "2", "3"];
    this.columnsb = ["Código do Curso", "Nom. Curso", "Descrição", "Qtd. Usuários"];

    //["name", "age", "species", "occupation"]
  }
}
