module AdminApp {
    export class HolderInfo {
        constructor(
            public title: string,
            public description: string,
            public moniker: string,
            public tags: string[],
            public email: string,
            public addresses: Address[],
            public socialNetworks: SocialNetwork[]
        ) { }
    }
}