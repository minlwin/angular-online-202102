export type Type = 'Income' | 'Expense'

export interface Category {
    id: number
    type: Type | ''
    name: string
    deleted: boolean
}