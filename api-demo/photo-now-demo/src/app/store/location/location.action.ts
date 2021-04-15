import { createAction, props } from "@ngrx/store";
import { District, State, Township } from "./location.model";

export const loadState = createAction('[Location State] load')
export const loadStateSuccess = createAction('[Location State] load Success', props<{ states: State[] }>())

export const setRegion = createAction('[Location Region] set', props<{ region: string }>())

export const loadDistrict = createAction('[Location District] load', props<{ state: number }>())
export const loadDistrictSuccess = createAction('[Location District] load success', props<{ districts: District[] }>())

export const loadTownship = createAction('[Location Township] load', props<{ district: number }>())
export const loadTownshipSuccess = createAction('[Location Township] load Success', props<{ townships: Township[] }>())
