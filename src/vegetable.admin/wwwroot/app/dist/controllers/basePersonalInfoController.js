/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var BasePersonalInfoController = (function () {
        function BasePersonalInfoController(dataToolsService) {
            var _this = this;
            this.dataToolsService = dataToolsService;
            this.info = null;
            this.availableTabs = null;
            this.searchTagText = '';
            this.dataToolsService.GetAvailableTags(function (data) {
                _this.availableTabs = data;
            });
        }
        return BasePersonalInfoController;
    }());
    BasePersonalInfoController.$inject = ['dataToolsService'];
    AdminApp.BasePersonalInfoController = BasePersonalInfoController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=basePersonalInfoController.js.map