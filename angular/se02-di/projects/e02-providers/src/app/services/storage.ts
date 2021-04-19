export interface IStorage {
    readonly list: string[]
    add(data: string): void
}