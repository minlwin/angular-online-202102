import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private id = 0

  private students: any[] = []

  constructor() { }

  save(student: any) {
    if (student.id) {
      this.update(student)
    } else {
      this.add(student)
    }
  }

  private add(student: any) {
    student.id = ++this.id
    this.students.push(student)
  }

  private update(student: any) {
    this.students.forEach(old => {
      if (old.id === student.id) {
        old.name = student.name
        old.phone = student.phone
        old.email = student.email
        old.subject = student.subject
      }
    })
  }

  getAll() {
    return this.students.filter(a => a.id)
  }
}
