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

