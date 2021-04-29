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

export interface BalanceVO {
    id: number
    date: Date
    category: Category
    employee: string
    income: number
    expense: number
    balance: number
}

export interface BalanceDetails {
    id: number
    balanceId: number
    item: string
    unit: number
    amount: number
    remark: string
}

export interface BalanceDetailsVO {
    id: number
    balance: BalanceVO
    item: string
    unit: number
    amount: number
    remark: string
}

export interface BalanceWithDetails {
    balance: Balance
    details: BalanceDetails[]
}

export interface BalanceWithDetailsVO {
    balance: BalanceVO
    details: BalanceDetailsVO[]
}