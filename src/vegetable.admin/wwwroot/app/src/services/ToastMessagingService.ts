/// <reference path="../_all.ts" />

module AdminApp {

    export interface IToastMessagingService {
        SendSuccess(message: string): void;
        SendFail(message: string): void;
    }
    export class ToastMessagingService implements IToastMessagingService {

        static $inject = ['$mdToast'];

        constructor(private $mdToast: ng.material.MDToastService) {
        }

        SendSuccess(message: string): void {
            this.$mdToast.show(this.$mdToast.simple().content(message).hideDelay(10000)
                .position('top right').theme("success-toast"));
        }

        SendFail(message: string): void {
            this.$mdToast.show(this.$mdToast.simple().content(message).hideDelay(10000)
                .position('top right').theme("fail-toast"));
        }
    }

}