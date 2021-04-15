import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { MemberService, ROLES } from '../../services/member.service';

@Component({
  templateUrl: './member-edit.component.html',
  providers: [
    SubSink
  ]
})
export class MemberEditComponent implements OnDestroy {

  form: FormGroup
  roles = ['', ...ROLES]

  constructor(
    bulder: FormBuilder,
    route: ActivatedRoute,
    private router: Router,
    private sub: SubSink,
    private service: MemberService
  ) {

    this.form = bulder.group({
      id: 0,
      role: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    })

    this.sub.sink = route.params.subscribe(params => {
      const id = Number(params['id'])
      if (id) {
        this.form.patchValue(service.findById(id))
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  save() {
    const id = this.service.save(this.form.value)
    this.router.navigate(['/hello', id, 'details'])
  }

}
