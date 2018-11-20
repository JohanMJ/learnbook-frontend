import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css'],
})
export class DetailCourseComponent implements OnInit {
    currentCourse ;
    activities: Activity[];
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
      this.id = Number (this.route.snapshot.paramMap.get('iCodCou'));
      this.currentCourse = new Course();
      this.activities = new Array<Activity>();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    getCourseById() {
      console.log("Curso");
      console.log( this.dataService.getCourseById(this.id).then(currentCourse => this.currentCourse = currentCourse));
      return this.dataService.getCourseById(this.id).then(currentCourse => this.currentCourse = currentCourse);

    }

    getActivitiesFromCourse() {
      console.log("Atividades");
      console.log(this.dataService.getActivitiesFromCourse(this.id).then(activities => this.activities = activities));
      return this.dataService.getActivitiesFromCourse(this.id).then(activities => this.activities = activities);

    }

    getProgress(){
      console.log("Progresso");
      console.log(this.dataService.getProgress(this.id).then(progress => this.progress = progress));
      return this.dataService.getProgress(this.id).then(progress => this.progress = progress);
    }
    
    updateActivity(){
      //return this.dataService.updateActivity(activity).then(progress => this.progress = progress);
    }

    onSubmit() {
      //https://pagseguro.uol.com.br/v2/checkout/payment.html?code=8CF4BE7DCECEF0F004A6DFA0A8243412
      this.dataService.buyCourse(this.currentCourse).then(retorno => this.retorno = retorno);
      console.log('code ' + this.retorno);

      if (typeof(this.retorno) != "undefined") {
        window.location.href = "https://pagseguro.uol.com.br/v2/checkout/payment.html?code=" + this.retorno;
      }
    }
  
    accomplishTask(id) {
      let act = new Activity();

      this.activities.forEach(element => {
        if(element.iCodAct == id){
          act = element;
        }
      });
      this.dataService.updateActivity(act).then(currentActivity => this.currentActivity = currentActivity);
      this.getProgress();
    }    

    ngOnInit(): void {
       this.getCourseById();
       this.getActivitiesFromCourse();
       this.getProgress();
    }

    
   
}

