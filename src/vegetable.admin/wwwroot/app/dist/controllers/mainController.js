/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var MainController = (function () {
        function MainController($mdSidenav) {
            this.$mdSidenav = $mdSidenav;
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        return MainController;
    }());
    MainController.$inject = ['$mdSidenav'];
    AdminApp.MainController = MainController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=mainController.js.map