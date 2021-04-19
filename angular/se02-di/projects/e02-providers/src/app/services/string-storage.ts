import { IStorage } from "./storage"

export class StringStorage implements IStorage {
    private innerList: string[] = ["Hello Angular"]

    add(data: string) {
        this.innerList.push(data)
    }

    get list() {
        return [...this.innerList]
    }
}