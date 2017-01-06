/// <reference path="_all.ts" />
var AdminApp;
(function (AdminApp) {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute'])
        .controller('dashboardController', AdminApp.DashboardController)
        .controller('mainController', AdminApp.MainController)
        .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "app/pages/home/home.html"
        })
            .when("/home", {
            templateUrl: "app/pages/home/home.html"
        })
            .when("/personalInfo", {
            templateUrl: "app/pages/personal_info/personalInfo.html"
        })
            .otherwise({
            redirectTo: '/'
        });
    });
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=boot.js.map