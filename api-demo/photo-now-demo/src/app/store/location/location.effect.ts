import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs/operators';
import * as Action from './location.action';
import { District, State, Township } from "./location.model";

const API = 'http://localhost:8080'

@Injectable()
export class LocationEffect {

    constructor(private http: HttpClient, private actions$: Actions) { }

    loadRegions = createEffect(() => this.actions$.pipe(
        ofType(Action.loadRegion),
        mergeMap(action => this.http.get<string[]>(`${API}/state/region`).pipe(
            map(list => ({ type: Action.loadRegionSuccess.type, payload: list }))
        ))
    ))

    loadStates = createEffect(() => this.actions$.pipe(
        ofType(Action.loadState),
        mergeMap(action => this.http.get<State[]>(`${API}/state`, { params: { region: action.params } }).pipe(
            map(list => ({ type: Action.loadStateSuccess.type, payload: list }))
        ))
    ))

    loadDistrict = createEffect(() => this.actions$.pipe(
        ofType(Action.loadDistrict),
        mergeMap(action => this.http.get<District[]>(`${API}/district`, { params: { state: action.params } }).pipe(
            map(list => ({ type: Action.loadDistrictSuccess.type, payload: list }))
        ))
    ))

    loadTownship = createEffect(() => this.actions$.pipe(
        ofType(Action.loadTownship),
        mergeMap(action => this.http.get<Township[]>(`${API}/township`, { params: { district: action.params } }).pipe(
            map(list => ({ type: Action.loadDistrictSuccess.type, payload: list }))
        ))
    ))
}