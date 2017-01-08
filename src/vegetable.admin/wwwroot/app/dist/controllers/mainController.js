/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var MainController = (function () {
        function MainController($mdSidenav) {
            this.$mdSidenav = $mdSidenav;
            this.menuItems = [];
            this.selectedMenuItem = null;
            this.menuItems = [
                { name: 'name', displayName: 'Home', url: '#!' },
                { name: 'personalInfo', displayName: 'Personal Info', url: '#!personalInfo' }
            ];
            this.selectedMenuItem = this.menuItems[0];
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
        MainController.$inject = ['$mdSidenav'];
        return MainController;
    }());
    AdminApp.MainController = MainController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=mainController.js.map