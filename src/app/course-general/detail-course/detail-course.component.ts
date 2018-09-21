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
    isLoaded = false;
    totalPages: number;

    // Pagination control
    pageNumber = 1;

    afterLoadComplete(pdfData: any) {
      this.totalPages = pdfData.numPages;
      this.isLoaded = true;
    }

    constructor(private dataService: DataService, private route: ActivatedRoute) {
      this.id = Number (this.route.snapshot.paramMap.get('iCodCou'));
      this.currentCourse = new Course();
      this.activities = new Array<Activity>();

      this.setDefaultActiveTask();
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
    }

    accomplishTask(id) {
      // set task accomplished
    }

    setDefaultActiveTask() {
      const element1 = document.getElementById('act-1');
      element1.classList.add('active');
      const element2 = document.getElementById('act-desc-1');
      element2.classList.add('active');
    }

    ngOnInit(): void {
       this.getCourseById();
       this.getActivitiesFromCourse();
       this.getProgress();
  }
}

