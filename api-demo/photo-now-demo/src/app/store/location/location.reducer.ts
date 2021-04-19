import { createReducer, on } from "@ngrx/store";
import * as Action from './location.action';
import * as Model from './location.model';

const reducer = createReducer(Model.initialLocations(),
    on(Action.loadRegionSuccess, (state, { payload }) => ({ ...Model.initialLocations(), regions: payload, target: 'Region' })),
    on(Action.loadStateSuccess, (state, { payload }) => ({ ...state, states: payload, target: 'State', districts: [], townships: [] })),
    on(Action.loadDistrictSuccess, (state, { payload }) => ({ ...state, districts: payload, target: 'District', townships: [] })),
    on(Action.loadTownshipSuccess, (state, { payload }) => ({ ...state, townships: payload, target: 'Township' })),
    on(Action.backTarget, state => {
        const { target, ...last } = state
        return { ...last, target: lastTarget(target) }
    }),
)

export function reduceLocation(state: any, action: any) {
    return reducer(state, action)
}

function lastTarget(target: Model.Type): Model.Type {
    let last: Model.Type = 'Region'

    switch (target) {
        case 'Township':
            last = "District"
            break
        case 'District':
            last = 'State'
            break
        default:
            last = 'Region'
    }

    return last
}