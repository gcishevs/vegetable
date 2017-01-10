/// <reference path="../_all.ts" />
module AdminApp {
    export class ProfileBaseController {
        holder: HolderInfo;       

        constructor() {           
        }

        public submitHolderInfo(): void {
            var info: HolderInfo = this.holder;
        }


    }
}