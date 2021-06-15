import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Class } from 'src/app/commons/commons/model/class.model';
import { Course } from 'src/app/commons/commons/model/course.model';
import { Teacher } from 'src/app/commons/commons/model/teacher.model';
import { ClassService } from 'src/app/commons/services/class.service';
import { CoursService } from 'src/app/commons/services/course.service';
import { TeachersService } from 'src/app/commons/services/teachers.service';

declare var bootstrap: any

@Component({
  templateUrl: './classes.component.html',
  styles: [
  ]
})
export class ClassesComponent implements AfterViewInit {

  list: Class[] = []

  form: FormGroup
  target: any = {}
  modal: any

  courses: Course[] = []
  teachers: Teacher[] = []

  @ViewChild('uploadFileInput')
  fileInput: any

  constructor(
    builder: FormBuilder,
    courseService: CoursService,
    teacherService: TeachersService,
    private service: ClassService
  ) {
    this.form = builder.group({
      teacher: '',
      course: '',
      from: '',
      to: ''
    })

    courseService.search({}).subscribe(data => this.courses = data)
    teacherService.search({}).subscribe(data => this.teachers = data)

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

  edit(data: Class) {
    this.target = data
    this.modal.show()
  }

  save(data: any) {
    this.service.save(data).subscribe(_ => this.search())
    this.modal.hide()
  }

  upload() {
    this.fileInput?.nativeElement?.click()
  }

  uploadFile(event: any) {
    this.service.upload(this.form.value.course, this.form.value.teacher, event?.target?.files[0]).subscribe(success => this.search())
  }

  canUpload(): boolean {
    return this.form.value.teacher && this.form.value.course
  }

}
