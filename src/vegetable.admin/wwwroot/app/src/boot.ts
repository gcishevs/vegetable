/// <reference path="_all.ts" />
module AdminApp {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'ngMessages', 'ymaps', 'auth0.lock', 'angular-jwt'])
        .controller('profileBaseController', ProfileBaseController)
        .controller('profileMainController', ProfileMainController)
        .controller('profileAddressesController', ProfileAddressesController)
        .controller('editAddressController', EditAddressController)
        .controller('mainController', MainController)
        .controller('homeController', HomeController)
        .service('dataToolsService', DataToolsService)
        .service('authService', AuthService)
        .run(function ($rootScope, authService, lock, authManager) {
            $rootScope.authService = authService;
            authService.RegisterAuthenticationListener();
            lock.interceptHash();
            authManager.checkAuthOnRefresh();
        })
        .config(function ($routeProvider, lockProvider, jwtOptionsProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "app/pages/home/home.html",
                    controller: "homeController",
                    controllerAs: "home"
                })
                .when("/home", {
                    templateUrl: "app/pages/home/home.html",
                    controller: "homeController",
                    controllerAs: "home"
                })
                .when("/personalInfo", {
                    templateUrl: "app/pages/personal_info/profilebase.html",
                    controller: "profileBaseController",
                    controllerAs: "pbase"
                })
                .otherwise({
                    redirectTo: '/'
                });

            lockProvider.init({
                clientID: 'KpF5kduqFqXVHykbcCDDMYhUI0VPboP3',
                domain: 'vegetableproj.eu.auth0.com'
            });

            // Configuration for angular-jwt
            jwtOptionsProvider.config({
                tokenGetter: function () {
                    return localStorage.getItem('id_token');
                }
            });
        });
}
