import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DistrictService } from '../commons/district.service';
import { StateService } from '../commons/state.service';
import { TownshipService } from '../commons/township.service';

@Component({
  templateUrl: './townships.component.html',
  styles: [
  ]
})
export class TownshipsComponent {

  regions: string[] = []
  states: any[] = []
  districts: any[] = []

  list: any[] = []
  form: FormGroup

  constructor(
    builder: FormBuilder,
    stateService: StateService,
    districtService: DistrictService,
    private service: TownshipService
  ) {
    this.form = builder.group({
      region: '',
      state: '',
      district: '',
      name: ''
    })

    stateService.regions().subscribe(result => this.regions = result)

    this.form.get('region')?.valueChanges
      .subscribe(region => {
        if (region) {
          stateService.search({ region: region }).subscribe(result => this.states = result)
        }
      })

    this.form.get('state')?.valueChanges
      .subscribe(state => {
        if (state) {
          districtService.search({ state: state }).subscribe(result => this.districts = result)
        }
      })
  }

  search() {
    this.service.search(this.form.value).subscribe(result => this.list = result)
  }

}
