import { Component } from '@angular/core';
import { StudentService } from './student.service';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: any[] = []
  target: any

  constructor(private service: StudentService) {
    this.students = service.getAll()
  }

  addNew() {
    this.target = { id: 0, name: '', phone: '', email: '', subject: '' }
    $('#editDialog').modal('show')
  }

  edit(data: any) {
    this.target = data
    $('#editDialog').modal('show')
  }

  save(student: any) {
    this.service.save(student)
    $('#editDialog').modal('hide')
    this.students = this.service.getAll()
  }
}
