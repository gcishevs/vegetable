/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var HolderService = (function () {
        function HolderService($http, $mdToast, cacheService, $q, toastMessagingService) {
            this.$http = $http;
            this.$mdToast = $mdToast;
            this.cacheService = cacheService;
            this.$q = $q;
            this.toastMessagingService = toastMessagingService;
        }
        HolderService.prototype.GetCurrentHolder = function () {
            var _this = this;
            var defer = this.$q.defer();
            var cacheKey = 'currentHolder';
            var existingValue = this.cacheService.holderCache.get(cacheKey);
            if (existingValue) {
                defer.resolve(existingValue);
                return defer.promise;
            }
            else {
                return this.$http.get("/api/holder")
                    .then(function (success) {
                    _this.$mdToast.show(_this.$mdToast.simple().content('Loaded!'));
                    defer.resolve(success.data);
                    _this.cacheService.holderCache.put(cacheKey, success.data);
                    return defer.promise;
                }, function (error) {
                    _this.toastMessagingService.SendFail(error);
                    defer.reject(error);
                });
            }
        };
        HolderService.prototype.SaveHolder = function (holder) {
            var _this = this;
            this.$http.post('/api/holder', holder).then(function (success) {
                _this.toastMessagingService.SendSuccess("!!The changes have been saved!");
            }, function (error) {
                _this.toastMessagingService.SendFail(error);
            });
        };
        HolderService.$inject = ['$http', '$mdToast', 'cacheService', '$q', 'toastMessagingService'];
        return HolderService;
    }());
    AdminApp.HolderService = HolderService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=holderService.js.map