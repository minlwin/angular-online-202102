export interface State {
    id: number
    region: string
    name: string
    mmName: string
    capital: string
}

export interface District {
    id: number
    state: State
    name: string
    mmName: string
    capital: string
}

export interface Township {
    id: number
    district: District
    name: string
    mmName: string
}

export interface Locations {
    regions: ReadonlyArray<string>
    states: ReadonlyArray<State>
    districts: ReadonlyArray<District>
    townships: ReadonlyArray<Township>
}

export function initialLocations(): Locations {
    return {
        regions: [],
        states: [],
        districts: [],
        townships: []
    }
}
