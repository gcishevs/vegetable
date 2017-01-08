/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var HolderService = (function () {
        function HolderService($http) {
            var _this = this;
            this.$http = $http;
            this.getHolder = function () {
                return _this.$http.get('/api/user');
            };
            return;
        }
        return HolderService;
    }());
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=holderService.js.map