/// <reference path="_all.ts" />
var AdminApp;
(function (AdminApp) {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute'])
        .controller('dashboardController', AdminApp.DashboardController)
        .controller('basePersonalInfoController', AdminApp.BasePersonalInfoController)
        .controller('mainController', AdminApp.MainController)
        .service('dataToolsService', AdminApp.DataToolsService)
        .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "app/pages/home/home.html"
        })
            .when("/home", {
            templateUrl: "app/pages/home/home.html"
        })
            .when("/personalInfo", {
            templateUrl: "app/pages/personal_info/personalInfo.html",
            controller: "basePersonalInfoController",
            controllerAs: "vm"
        })
            .otherwise({
            redirectTo: '/'
        });
    });
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=boot.js.map