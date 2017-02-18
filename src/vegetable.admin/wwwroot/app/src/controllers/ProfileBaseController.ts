/// <reference path="../_all.ts" />
module AdminApp {
    export class ProfileBaseController {
        holder: HolderInfo;
        static $inject = ['holderService', '$scope'];

        constructor(private holderService: IHolderService, private $scope: ng.IScope) {
            holderService.GetCurrentHolder().then((responce) => { this.holder = responce; });
        }

        public submitHolderInfo(data: HolderInfo): void {
            var info: HolderInfo = this.holder;
        }
    }
}