export type Type = 'Income' | 'Expense'

export interface StorageService {
    loadResource(): void
    saveResource(): void
}

export interface Category {
    readonly id: number
    readonly type: Type | ''
    readonly name: string
    readonly deleted: boolean
}

export interface Balance {
    readonly id: number
    readonly category: any
    readonly useDate: Date
    readonly total: number
    readonly employee: string
}

export interface BalanceDetails {
    readonly id: number
    readonly balance: any
    readonly item: string
    readonly unit: number
    readonly amount: number
    readonly remark: string
}

export interface BalanceWithDetails {
    balance: Balance
    details: BalanceDetails[]
}

export interface BalanceVO {
    id: number
    useDate: Date
    category: Category
    employee: string
    total: number
    balance: number
}

