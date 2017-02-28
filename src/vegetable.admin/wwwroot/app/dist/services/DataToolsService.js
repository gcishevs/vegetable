/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var DataToolsService = (function () {
        function DataToolsService($http) {
            this.http = $http;
        }
        DataToolsService.prototype.GetAvailableTags = function (successCallback) {
            this.http.get("/api/AvailableTags").then(function (success) {
                successCallback(success);
            }, function (error) {
                successCallback(error);
            });
        };
        return DataToolsService;
    }());
    AdminApp.DataToolsService = DataToolsService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=DataToolsService.js.map