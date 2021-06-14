export class ApiData {
    constructor(public __type: string) { }
}

export class Pointer extends ApiData {

    constructor(public className: string, public objectId: string) {
        super('Pointer')
    }
}

export class ApiDate extends ApiData {

    constructor(public iso: Date) {
        super('Date')
    }
}