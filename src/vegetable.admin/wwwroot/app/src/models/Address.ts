module AdminApp {
    export class Address {
        constructor(
            public description: string,
            public country: string,
            public state: string,
            public city: string,
            public postalCode: string,
            public street: string,
            public unit: string,
            public phoneNumbers: PhoneNumber[],
            public points: string
        ) { }
    }
}