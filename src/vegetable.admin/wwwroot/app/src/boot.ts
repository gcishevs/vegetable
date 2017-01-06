/// <reference path="_all.ts" />

module AdminApp {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute'])
        .controller('dashboardController', DashboardController)
        .controller('mainController', MainController)
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
}
