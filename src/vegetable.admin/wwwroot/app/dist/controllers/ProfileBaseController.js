/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var ProfileBaseController = (function () {
        function ProfileBaseController(holderService, $scope) {
            var _this = this;
            this.holderService = holderService;
            this.$scope = $scope;
            holderService.GetCurrentHolder().then(function (responce) { _this.holder = responce; });
        }
        ProfileBaseController.prototype.submitHolderInfo = function (data) {
            var info = this.holder;
        };
        ProfileBaseController.$inject = ['holderService', '$scope'];
        return ProfileBaseController;
    }());
    AdminApp.ProfileBaseController = ProfileBaseController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProfileBaseController.js.map