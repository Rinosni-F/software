import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
courses=Array<any>();

  constructor() { }
  
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    selectcourse: new FormControl(),
    faculty: new FormControl(),
  })
  ngOnInit(): void {
  }
  
onSubmit() {
  const courses={
    firstname:this.contactForm.get('firstname')?.value,
    lastname :this.contactForm.get('lastname')?.value,
    email:this.contactForm.get('email')?.value,
    selectcourse :this.contactForm.get('selectcourse')?.value,
    faculty:this.contactForm.get('faculty')?.value
  };
  this.courses.push(courses);
  console.log(courses.firstname)
}
 }
