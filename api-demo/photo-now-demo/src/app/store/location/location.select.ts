import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Locations } from "./location.model";

const locations = createFeatureSelector<Locations>('locations')

export const regions = createSelector(locations, state => state.districts)
export const states = createSelector(locations, state => state.states)
export const districts = createSelector(locations, state => state.districts)
export const townships = createSelector(locations, state => state.townships)