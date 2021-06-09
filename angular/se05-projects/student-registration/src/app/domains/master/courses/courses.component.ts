import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COURE_LEVELS, Course } from 'src/app/commons/commons/model/course.model';
import { CoursService } from 'src/app/commons/services/course.service';

declare var bootstrap: any

@Component({
  templateUrl: './courses.component.html',
  styles: [
  ]
})
export class CoursesComponent implements AfterViewInit {

  form: FormGroup
  list: Course[] = []

  levels = COURE_LEVELS

  target: any = {}
  modal: any

  constructor(builder: FormBuilder, private service: CoursService) {
    this.form = builder.group({
      level: '',
      name: ''
    })

    this.search()
  }

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal('#editDialog')
  }

  search() {
    this.service.search(this.form.value).subscribe(data => this.list = data)
  }

  addNew() {
    this.target = {}
    this.modal.show()
  }

  edit(data: any) {
    this.target = data
    this.modal.show()
  }

  save(data: any) {
    this.service.save(data).subscribe(_ => this.search())
    this.modal.hide()
  }

}
