import { IStorage } from "./storage";

export class ModifiedStorage implements IStorage {
    list: string[] = []
    add(data: string) {
        this.list.push("Modified " + data);
    }
}