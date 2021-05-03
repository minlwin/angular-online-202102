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