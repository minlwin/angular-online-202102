import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../commons/state.service';

@Component({
  templateUrl: './states.component.html',
})
export class StatesComponent {

  // Search Form
  form: FormGroup

  // Regions for Region Selet Input
  regions: string[] = []

  // State list that represent search result
  list: any[] = []

  constructor(builder: FormBuilder, private service: StateService) {
    this.form = builder.group({
      region: "",
      name: ""
    })

    service.regions().subscribe(data => this.regions = data)
  }

  search() {
    this.service.search(this.form.value).subscribe(data => this.list = data)
  }

}
