/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var ProfileMainController = (function () {
        function ProfileMainController(dataToolsService) {
            var _this = this;
            this.dataToolsService = dataToolsService;
            this.availableTabs = null;
            this.searchTagText = '';
            this.dataToolsService.GetAvailableTags(function (data) {
                _this.availableTabs = data;
            });
        }
        ProfileMainController.prototype.queryTags = function (searchTag) {
            var results;
            var allTags = this.availableTabs;
            if (!searchTag) {
                results = allTags.slice(0, 5);
            }
            else if (/^-$/.test(searchTag)) {
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
        return ProfileMainController;
    }());
    ProfileMainController.$inject = ['dataToolsService'];
    AdminApp.ProfileMainController = ProfileMainController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProfileMainController.js.map