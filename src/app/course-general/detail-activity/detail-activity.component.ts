import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css'],
})
export class DetailActivityComponent implements OnInit {
    currentActivity ;
    activities: Activity[];
    currentUser: User;
    progress: number;
    retorno: String;
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
      this.id = Number (this.route.snapshot.paramMap.get('iCodAct'));
      this.currentActivity = new Activity();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    getActivityById() {
      console.log("Activity");
      console.log( this.dataService.getCourseById(this.id).then(currentActivity => this.currentActivity = currentActivity));
      return this.dataService.getCourseById(this.id).then(currentActivity => this.currentActivity = currentActivity);

    }

    updateActivity(){
      //return this.dataService.updateActivity(activity).then(progress => this.progress = progress);
    }

    ngOnInit(): void {
       this.getActivityById();
    }
}

