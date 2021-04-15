import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member, MemberService } from '../../services/member.service';

@Component({
  templateUrl: './member-details.component.html',
  styles: [
  ]
})
export class MemberDetailsComponent {

  member?: Member

  constructor(
    service: MemberService,
    route: ActivatedRoute
  ) {
    route.paramMap.subscribe(params => {
      this.member = service.findById(Number(params.get('id')))
    })
  }


}
