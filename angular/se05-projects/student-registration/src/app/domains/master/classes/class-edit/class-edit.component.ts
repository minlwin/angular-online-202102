import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Course } from 'src/app/commons/commons/model/course.model';
import { Teacher } from 'src/app/commons/commons/model/teacher.model';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styles: [
  ]
})
export class ClassEditComponent {

  form: FormGroup

  @Input()
  courses: Course[] = []

  @Input()
  teachers: Teacher[] = []

  @Input()
  set data(data: any) {
    if (data.objectId) {
      this.form.patchValue(data)
    } else {
      this.form.reset()
      this.form.patchValue({ course: '', teacher: '' })
    }
  }

  @Output()
  onSave = new EventEmitter

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      objectId: null,
      course: ['', Validators.required],
      teacher: ['', Validators.required],
      startDate: ['', Validators.required],
      times: builder.group({
        start: ['', Validators.required],
        end: ['', Validators.required]
      }, { validators: [this.validateTimes] }),
      days: builder.array([
        false, false, false, false, false, false, false
      ], this.validateDays)
    })
  }

  get days(): FormArray {
    return this.form.get('days') as FormArray
  }

  validateTimes(controls: AbstractControl): ValidationErrors | null {

    const value: { start: string, end: string } = controls.value

    if (value.start.localeCompare(value.end) >= 0) {
      return {
        times: 'Start time must be less than End Time.'
      }
    }
    return null
  }


  validateDays(controls: AbstractControl): ValidationErrors | null {

    const days: boolean[] = controls.value

    for (const day of days) {
      if (day) {
        return null;
      }
    }
    return {
      days: 'Please Select Day'
    }
  }


  save() {
    this.onSave.emit(this.form.value)
  }

}
