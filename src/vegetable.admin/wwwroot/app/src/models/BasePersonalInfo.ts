module AdminApp {
    export class BasePersonalInfo {
        constructor(
            public title: string,
            public description: string,
            public moniker: string,
            public tags: string[],
            public email: string
        ) { }
    }
}