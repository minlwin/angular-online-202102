import { createReducer, on } from "@ngrx/store";
import * as Action from './location.action';
import * as Model from './location.model';

const reducer = createReducer(Model.initialLocations(),
    on(Action.loadRegionSuccess, (state, { payload }) => ({ ...Model.initialLocations(), regions: payload })),
    on(Action.loadStateSuccess, (state, { payload }) => ({ ...state, states: payload, districts: [], townships: [] })),
    on(Action.loadDistrictSuccess, (state, { payload }) => ({ ...state, districts: payload, townships: [] })),
    on(Action.loadTownshipSuccess, (state, { payload }) => ({ ...state, townships: payload })),
)

export function reduceLocation(state: any, action: any) {
    return reducer(state, action)
}