import { Component } from '@angular/core';
import { Student, StudentModel } from './student.model';

@Component({
  templateUrl: './simple.component.html',
})
export class SimpleComponent {

  student: Student

  constructor(private model: StudentModel) {
    this.student = model.newStudent()
  }

  get interests(): string[] {
    return Object.keys(this.student.interests)
  }

  get list(): Student[] {
    return this.model.list
  }

  save() {
    // Add Student to Model
    this.model.add(this.student)
    // Reset Form
    this.student = this.model.newStudent()
  }

  edit(data: Student) {
    this.student = data
  }
}
