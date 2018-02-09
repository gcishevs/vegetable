/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var ToastMessagingService = (function () {
        function ToastMessagingService($mdToast) {
            this.$mdToast = $mdToast;
        }
        ToastMessagingService.prototype.SendSuccess = function (message) {
            this.$mdToast.show(this.$mdToast.simple().content(message).hideDelay(10000)
                .position('top right').theme("success-toast"));
        };
        ToastMessagingService.prototype.SendFail = function (message) {
            this.$mdToast.show(this.$mdToast.simple().content(message).hideDelay(10000)
                .position('top right').theme("fail-toast"));
        };
        return ToastMessagingService;
    }());
    ToastMessagingService.$inject = ['$mdToast'];
    AdminApp.ToastMessagingService = ToastMessagingService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ToastMessagingService.js.map