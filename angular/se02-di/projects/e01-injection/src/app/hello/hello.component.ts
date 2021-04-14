import { Component } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent {

  constructor(private service: MemberService) { }

}
