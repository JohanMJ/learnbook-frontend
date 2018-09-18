import { Course } from '../../models/course';
import { DataService } from '../../data.service';
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
    activities;
    progress: number;
    id: number;

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
    //  return this.dataService.updateActivity(activity).then(progress => this.progress = progress);
    }
    onSubmit() {
      
    }
  

    accomplishTask() {
      // set task accomplished
    }

    ngOnInit(): void {
       this.getCourseById();
       this.getActivitiesFromCourse();
       this.getProgress();
  }
}

