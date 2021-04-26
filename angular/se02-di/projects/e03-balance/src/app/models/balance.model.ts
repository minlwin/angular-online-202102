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