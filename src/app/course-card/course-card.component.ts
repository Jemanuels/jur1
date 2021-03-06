import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  cardClasses(){

    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
    
  }

  onCourseViewed(){
    console.log('card component has been clicked!');
    this.courseSelected.emit(this.course);
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  cardStyles(){
    return {'text-decoration': 'underline'};
  }

}
