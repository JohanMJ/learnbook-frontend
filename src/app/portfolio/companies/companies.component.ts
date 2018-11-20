import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';





@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class PortfolioCompanies implements OnInit {
  currentUser: User;
  users= [];
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
    this.dataService.listAllByCompany(this.id).then(users => this.users = users);
  }
  getCourses() {
    return this.dataService.listAllByCompany(this.id).then(users => this.users = users);
  }

  ngOnInit(): void {
    console.log(this.getCourses());
    this.columns = ["iCodUser", "sNamUser", "bStaUser"];
    this.columnsb = ["Código do Usuário", "Nom. Usuário", "Status ativo"];

    //["name", "age", "species", "occupation"]
  }
}
