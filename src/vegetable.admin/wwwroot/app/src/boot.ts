/// <reference path="_all.ts" />

module AdminApp {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'ngMessages', 'ymaps'])
        .controller('profileBaseController', ProfileBaseController)
        .controller('profileMainController', ProfileMainController)
        .controller('profileAddressesController', ProfileAddressesController)
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
                    templateUrl: "app/pages/personal_info/profilebase.html",
                    controller: "profileBaseController",
                    controllerAs: "pbase"
                })
                .otherwise({
                    redirectTo: '/'
                });                     
        });
}
