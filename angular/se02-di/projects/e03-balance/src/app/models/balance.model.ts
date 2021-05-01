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
    category: any
    useDate: Date
    total: number
    employee: string
}

export interface BalanceDetails {
    id: number
    balance: any
    item: string
    unit: number
    amount: number
    remark: string
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

