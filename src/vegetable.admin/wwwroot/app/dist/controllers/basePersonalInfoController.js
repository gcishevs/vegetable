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
        BasePersonalInfoController.prototype.queryTags = function (searchTag) {
            var results;
            var allTags = this.availableTabs.data;
            if (!searchTag) {
                // only return the first 5 initially, so the first time the autocomplete is filled, it'll only have a few to bind
                results = allTags.slice(0, 5);
            }
            else if (/^-$/.test(searchTag)) {
                // allow getting all values if they type just a "-"
                results = allTags;
            }
            else {
                searchTag = searchTag.toLowerCase();
                results = allTags.filter(function (val) {
                    return val.toLowerCase().indexOf(searchTag) === 0;
                });
            }
            return results;
        };
        BasePersonalInfoController.prototype.submitBasePersonalInfo = function () {
            var result = this.holder;
        };
        return BasePersonalInfoController;
    }());
    BasePersonalInfoController.$inject = ['dataToolsService'];
    AdminApp.BasePersonalInfoController = BasePersonalInfoController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=basePersonalInfoController.js.map