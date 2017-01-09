/// <reference path="_all.ts" />

module AdminApp {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute'])
        .controller('dashboardController', DashboardController)
        .controller('basePersonalInfoController', BasePersonalInfoController)
        .controller('mainController', MainController)
        .service('dataToolsService', DataToolsService)  
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
}
