import { StorageService } from "./balance.model";

export abstract class BaseStorage<T> implements StorageService {

    constructor(protected resource: T, private key: string) { }

    loadResource(): void {
        const str = localStorage.getItem(this.key)

        if (str) {
            this.resource = JSON.parse(str)
        }
    }

    saveResource(): void {
        localStorage.setItem(this.key, JSON.stringify(this.resource))
    }

}

export abstract class ListStorage<T> extends BaseStorage<{ [id: number]: T }> {

    constructor(resource: { [id: number]: T }, key: string) {
        super(resource, key)
    }

    get list(): T[] {
        return Object.values(this.resource).map(a => ({ ...a }))
    }

}