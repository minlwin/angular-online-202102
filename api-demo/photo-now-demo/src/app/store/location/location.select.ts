import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Location, Locations } from "./location.model";

const state = createFeatureSelector<Locations>('locations')

export const locations = createSelector(
    state, state => {
        let result: Location[] = []
        switch (state.target) {
            case 'Region':
                result = state.regions.map(a => ({ id: a, name: a }))
                break
            case 'State':
                result = state.states.map(a => ({ id: String(a.id), name: a.name }))
                break
            case 'District':
                result = state.districts.map(a => ({ id: String(a.id), name: a.name }))
                break
            case 'Township':
                result = state.townships.map(a => ({ id: String(a.id), name: a.name }))
        }

        return result
    }
)

export const target = createSelector(state, state => state.target)