/// <reference path="_all.ts" />
var AdminApp;
(function (AdminApp) {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'ngMessages', 'ymaps'])
        .controller('profileBaseController', AdminApp.ProfileBaseController)
        .controller('profileMainController', AdminApp.ProfileMainController)
        .controller('profileAddressesController', AdminApp.ProfileAddressesController)
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
            templateUrl: "app/pages/personal_info/profilebase.html",
            controller: "profileBaseController",
            controllerAs: "pbase"
        })
            .otherwise({
            redirectTo: '/'
        });
    });
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=boot.js.map