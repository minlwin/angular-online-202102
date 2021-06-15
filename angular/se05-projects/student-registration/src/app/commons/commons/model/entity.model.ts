export interface Entity {
    objectId?: string
    createdAt?: string
    updatedAt?: string
}

export class BatchOperation {
    method = 'POST'
    constructor(public path: string, public body: any) { }
}