import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Activity } from '../../models/activity';
import { Group } from 'app/models/group';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.css'],
})
export class DetailGroupComponent implements OnInit {
    currentGroup ;
    courses;
    currentUser: User;
    progress: number;
    retorno: String;
    id: number;
    currentActivity;

    page: number = 1;
    totalPages: number;
    isLoaded: boolean = false;

    afterLoadComplete(pdfData: any) {
      this.totalPages = pdfData.numPages;
      this.isLoaded = true;
    }

    nextPage() {
      this.page++;
    }

    prevPage() {
      this.page--;
    }

    constructor(private dataService: DataService, private route: ActivatedRoute) {
      this.id = Number (this.route.snapshot.paramMap.get('iCodGru'));
      this.currentGroup = new Group();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    getCourseById() {
      console.log("Grupo");
      console.log( this.dataService.getGroup(this.id).then(currentGroup => this.currentGroup = currentGroup));
      return this.dataService.getGroup(this.id).then(currentGroup => this.currentGroup = currentGroup);
    }

    getCoursesByGroup() {
        console.log( this.dataService.getCoursesByGroup(this.id).then(courses => this.courses = courses));
        
        return this.dataService.getCoursesByGroup(this.id).then(courses => this.courses = courses);
      }

    onSubmit() {
      //https://pagseguro.uol.com.br/v2/checkout/payment.html?code=8CF4BE7DCECEF0F004A6DFA0A8243412
      this.dataService.buyCourse(this.currentGroup).then(retorno => this.retorno = retorno);
      console.log('code ' + this.retorno);

      if (typeof(this.retorno) != "undefined") {
        window.location.href = "https://pagseguro.uol.com.br/v2/checkout/payment.html?code=" + this.retorno;
      }
    }  

    ngOnInit(): void {
       this.getCourseById();
       this.getCoursesByGroup();
       console.log("cursos(num): " + this.courses);
    }
}

