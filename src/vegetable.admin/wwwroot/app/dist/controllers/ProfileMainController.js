/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var ProfileMainController = (function () {
        function ProfileMainController(dataToolsService, holderService) {
            var _this = this;
            this.dataToolsService = dataToolsService;
            this.holderService = holderService;
            this.availableTabs = null;
            this.searchTagText = '';
            this.holderMainInfo = null;
            this.dataToolsService.GetAvailableTags(function (data) {
                _this.availableTabs = data;
            });
        }
        ProfileMainController.prototype.submitMainInfo = function (holder) {
            holder.title = this.holderMainInfo.title;
            holder.description = this.holderMainInfo.description;
            holder.email = this.holderMainInfo.email;
            holder.moniker = this.holderMainInfo.moniker;
            holder.tags = this.holderMainInfo.tags;
            this.holderService.SaveHolder(holder);
        };
        ProfileMainController.prototype.initMainInfoForm = function (holder) {
            var _this = this;
            this.holderService.GetCurrentHolder()
                .then(function (success) {
                _this.holderMainInfo = success;
            });
        };
        ProfileMainController.prototype.queryTags = function (searchTag) {
            var results;
            var allTags = this.availableTabs.data;
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
    ProfileMainController.$inject = ['dataToolsService', 'holderService'];
    AdminApp.ProfileMainController = ProfileMainController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProfileMainController.js.map