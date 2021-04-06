import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DistrictService } from '../commons/district.service';
import { StateService } from '../commons/state.service';

@Component({
  templateUrl: './districts.component.html',
  styles: [
  ]
})
export class DistrictsComponent {

  regions: string[] = []
  states: any[] = []

  form: FormGroup
  list: any[] = []

  constructor(builder: FormBuilder, stateService: StateService, private districtService: DistrictService) {

    // Build Search Form
    this.form = builder.group({
      region: '',
      state: '',
      name: ''
    })

    stateService.regions().subscribe(data => this.regions = data)

    // Change State list according to the changes of region select value
    this.form.get('region')?.valueChanges.subscribe(region => {
      this.states = []
      if (region) {
        stateService.search({ region: region }).subscribe(data => this.states = data)
      }
    })

  }

  search() {
    this.districtService.search(this.form.value).subscribe(data => this.list = data)
  }

}
