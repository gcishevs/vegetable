/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var MainController = (function () {
        function MainController($mdSidenav, holderService) {
            this.$mdSidenav = $mdSidenav;
            this.holderService = holderService;
            this.menuItems = [];
            this.selectedMenuItem = null;
            this.isHolderLoaded = false;
            this.menuItems = [
                { name: 'name', displayName: 'Home', url: '#!' },
                { name: 'personalInfo', displayName: 'Personal Info', url: '#!personalInfo' }
            ];
            this.selectedMenuItem = this.menuItems[0];
            this.loadHolder();
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectMenuItem = function (item) {
            this.selectedMenuItem = item;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        };
        MainController.prototype.loadHolder = function () {
            var _this = this;
            this.holderService.GetCurrentHolder()
                .then(function (success) {
                _this.isHolderLoaded = true;
            });
        };
        MainController.$inject = ['$mdSidenav', 'holderService'];
        return MainController;
    }());
    AdminApp.MainController = MainController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=mainController.js.map