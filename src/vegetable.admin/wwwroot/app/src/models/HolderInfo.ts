module AdminApp {
    export class HolderInfo {
        constructor(
            public holderId: string,
            public title: string,
            public description: string,
            public moniker: string,
            public tags: Tag[],
            public email: string,
            public addresses: Address[]
            //public socialNetworks: SocialNetwork[]
        ) { }
    }
}