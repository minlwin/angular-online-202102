import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as Action from '../store/location/location.action';
import { Locations, Type } from '../store/location/location.model';
import * as Selector from '../store/location/location.select';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  locatios$ = this.store.select(Selector.locations)
  type$ = this.store.select(Selector.target).pipe(tap(type => this.currentType = type))
  currentType: Type = 'Region'

  constructor(private store: Store<{ locations: Locations }>) {
    store.dispatch(Action.loadRegion())
  }

  next(id: string) {
    switch (this.currentType) {
      case 'Region':
        this.store.dispatch(Action.loadState({ params: id }))
        break
      case 'State':
        this.store.dispatch(Action.loadDistrict({ params: id }))
        break
      case 'District':
        this.store.dispatch(Action.loadTownship({ params: id }))
        break
      default:
        break
    }
  }

  back() {
    if (this.currentType !== 'Region') {
      this.store.dispatch(Action.backTarget())
    }
  }

}
