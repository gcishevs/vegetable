/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var HolderService = (function () {
        function HolderService($http, $location) {
            this.http = $http;
            this.location = $location;
        }
        HolderService.prototype.GetAll = function (successCallback) {
            this.http.get(this.location.absUrl()).success(function (data, status) {
                successCallback(data);
            }).error(function (error) {
                successCallback(error);
            });
        };
        return HolderService;
    }());
    AdminApp.HolderService = HolderService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=holderService.js.map