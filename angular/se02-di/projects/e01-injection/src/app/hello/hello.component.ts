import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member, MemberService, ROLES } from '../services/member.service';

@Component({
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent {

  roles = ['', ...ROLES]

  form: FormGroup
  list: Member[] = []

  constructor(
    builder: FormBuilder,
    private service: MemberService
  ) {
    this.form = builder.group({
      role: '',
      name: ''
    })
  }

  search() {
    this.list = this.service.search(this.form.value)
  }

}
