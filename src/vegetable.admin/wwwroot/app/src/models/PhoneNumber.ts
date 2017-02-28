module AdminApp {
    export class PhoneNumber {
        constructor(
            public number: string,
            public type: PhoneNumberType
        ) { }
    }

    export enum PhoneNumberType {
        Classic = 1,
        Cell = 2
    }
}