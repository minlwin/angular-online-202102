import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './matrix.component.html',
  styles: [
  ]
})
export class MatrixComponent {

  paramsMap: any
  params: any

  queryParams: any
  queryParamsMap: any

  constructor(route: ActivatedRoute) {

    this.params = route.params
    this.paramsMap = route.paramMap
    this.queryParams = route.queryParams
    this.queryParamsMap = route.queryParamMap

  }
}
