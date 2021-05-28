import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDialogComponent } from 'src/app/commons/app-commons/widgets/modal-dialog/modal-dialog.component';
import { Class } from 'src/app/commons/app-service/model/class.model';
import { Course } from 'src/app/commons/app-service/model/course.model';
import { ClassService } from 'src/app/commons/app-service/service/class.service';
import { CourseService } from 'src/app/commons/app-service/service/course.service';

@Component({
  templateUrl: './class.component.html',
  styles: [
  ]
})
export class ClassComponent implements OnInit {

  courses: Course[] = []
  list: Class[] = []
  searchForm: FormGroup
  editForm: FormGroup

  @ViewChild(ModalDialogComponent)
  dialog?: ModalDialogComponent

  constructor(
    builder: FormBuilder,
    private classService: ClassService,
    private courseService: CourseService
  ) {
    this.searchForm = builder.group({
      course: '',
      teacher: '',
      from: '',
      to: ''
    })

    this.editForm = builder.group({
      objectId: null,
      teacher: ['', Validators.required],
      course: ['', Validators.required],
      startDate: ['', Validators.required],
      days: builder.array([
        false, false, false, false, false, false, false
      ])
    })

  }

  ngOnInit(): void {
    this.courseService.search().subscribe(data => this.courses = data)
  }

  search() {
    this.classService.search(this.searchForm.value).subscribe(data => this.list = data)
  }

  addNew() {
    this.dialog?.show()
  }

  edit() {

  }

  save(valid: any) {
    if (valid) {
      this.classService.save(this.editForm.value).subscribe(result => {
        if (result) {
          this.search()
        }
      })
    }
  }

  get days(): FormArray {
    return this.editForm.get('days') as FormArray
  }

}
