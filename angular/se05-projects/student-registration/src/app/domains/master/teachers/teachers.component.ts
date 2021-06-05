import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeachersService } from 'src/app/commons/services/teachers.service';

declare var bootstrap: any

@Component({
  templateUrl: './teachers.component.html',
  styles: [
  ]
})
export class TeachersComponent implements AfterViewInit {

  form: FormGroup
  list: any[] = []

  target: any = {}
  modal: any

  constructor(builder: FormBuilder, private service: TeachersService) {
    this.form = builder.group({
      name: '',
      phone: ''
    })
  }

  ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal('#editDialog')
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
    this.service.save(data).subscribe(id => this.search())
    this.modal.hide()
  }

  search() {
    this.service.search(this.form.value).subscribe(results => this.list = results)
  }

}
