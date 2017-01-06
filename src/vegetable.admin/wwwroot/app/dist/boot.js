/// <reference path="_all.ts" />
var AdminApp;
(function (AdminApp) {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons'])
        .controller('dashboardController', AdminApp.DashboardController)
        .controller('mainController', AdminApp.MainController);
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=boot.js.map