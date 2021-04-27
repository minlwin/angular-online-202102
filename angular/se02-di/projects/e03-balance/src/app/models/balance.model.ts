export type Type = 'Income' | 'Expense'

export interface StorageService {
    loadResource(): void
    saveResource(): void
}

export interface Category {
    id: number
    type: Type | ''
    name: string
    deleted: boolean
}

export interface Balance {
    id: number
    categoryId: number
    useDate: Date
    total: number
    employee: string
}

export interface BalanceDetails {
    id: number
    balanceId: number
    item: string
    unit: number
    amount: number
    remark: string
}