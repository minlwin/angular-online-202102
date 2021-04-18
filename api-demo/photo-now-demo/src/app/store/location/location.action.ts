import { createAction, props } from "@ngrx/store";
import { District, State, Township } from "./location.model";

export const loadRegion = createAction('[Location Region] load')
export const loadRegionSuccess = createAction('[Location Region] load Success', props<{ payload: string[] }>())

export const loadState = createAction('[Location State] load', props<{ params: any }>())
export const loadStateSuccess = createAction('[Location State] load Success', props<{ payload: State[] }>())

export const loadDistrict = createAction('[Location District] load', props<{ params: any }>())
export const loadDistrictSuccess = createAction('[Location District] load success', props<{ payload: District[] }>())

export const loadTownship = createAction('[Location Township] load', props<{ params: any }>())
export const loadTownshipSuccess = createAction('[Location Township] load Success', props<{ payload: Township[] }>())
