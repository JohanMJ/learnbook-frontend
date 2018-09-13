import { Course } from '../../models/course';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import {
  Directive, forwardRef,
  Attribute, OnChanges, SimpleChanges, Input
} from '@angular/core';
import {
  NG_VALIDATORS, Validator,
  Validators, AbstractControl, ValidatorFn
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';





@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css'],
})
export class DetailCourseComponent implements OnInit {
    currentCourse: Course;
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
    }
  
    getCourseById() {
      return this.dataService.getCourseById(this.id).then(currentCourse => this.currentCourse = currentCourse);
     
   }
  
    ngOnInit(): void {
       console.log(this.getCourseById());
  }
}

