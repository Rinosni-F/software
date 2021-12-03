import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   constructor() { }
  newCourse:any ={};

  allFaculty = [{"id" : 1, "name" :"Ben Stiller"},
  {"id" : 2, "name" :"Queen Latifah"},
  {"id" : 3, "name" :"Tom Cruiise"}
];

  courses=[{
    course:"Java Full stack Training",
    lastAccessed:"2 days ago",
    specialTag:"hot",
    likes:200,
    location:"UK",
    image:"https://image.shutterstock.com/image-photo/young-female-participant-computer-course-260nw-464455418.jpg",
    enabled:true,
    isSpecial:true

  },
  {
    course:"UI UX using Angular",
    faculty:"Josh",
    facultyLoves:"100",
    lastAccessed:"2 days ago",
    specialTag:"Selling out fast",
    likes:100,
    location:"France",
    image:"https://image.shutterstock.com/image-photo/distance-learning-online-education-webpage-260nw-552474349.jpg",
    enabled:true,
    isSpecial:true
  },
  {
    course:"Ionic Training",
    faculty:"Josh",
    facultyLoves:"100",
    lastAccessed:"2 days ago",
    likes:50,
    location:"US",
    image:"https://image.shutterstock.com/image-photo/rear-view-young-office-workers-260nw-295307798.jpg",
    enabled:false,
    isSpecial:false
  }
  ]

ngOnInit(){}

  getColor(like:any){
    switch(like){
      case (100):
        return 'red';
      case (50):
        return 'blue';
      default :
        return 'purple';
    }
  }

  onEnroll(event:any){
      console.log(event);
  }

  onFormSubmit(courseForm:any){
    this.newCourse.likes=0;
    this.newCourse.facultyLoves=0;
    this.newCourse.enabled=true;
    this.courses.push(this.newCourse);
    this.newCourse={};
  }

  editCourse(course:any){

  }
}
