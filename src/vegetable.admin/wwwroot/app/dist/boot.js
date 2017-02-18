/// <reference path="_all.ts" />
var AdminApp;
(function (AdminApp) {
    var appModule = angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'ngMessages', 'ymaps', 'angular-cache', 'auth0.lock', 'angular-jwt'])
        .service('dataToolsService', AdminApp.DataToolsService)
        .service('yandexGeoService', AdminApp.YandexGeoService)
        .service('holderService', AdminApp.HolderService)
        .service('cacheService', AdminApp.CacheService)
        .service('toastMessagingService', AdminApp.ToastMessagingService)
        .controller('profileBaseController', AdminApp.ProfileBaseController)
        .controller('profileMainController', AdminApp.ProfileMainController)
        .controller('profileAddressesController', AdminApp.ProfileAddressesController)
        .controller('editAddressController', AdminApp.EditAddressController)
        .controller('mainController', AdminApp.MainController)
        .controller('homeController', AdminApp.HomeController)
        .service('dataToolsService', AdminApp.DataToolsService)
        .service('authService', AdminApp.AuthService)
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
            .when("/personalInfo/main", {
            templateUrl: "app/pages/personal_info/profilebase.html",
            controller: "profileMainController",
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
    })
        .config(function (CacheFactoryProvider) {
        angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
    })
        .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('success-toast')
            .backgroundPalette('green');
    })
        .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('fail-toast')
            .backgroundPalette('red');
    });
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=boot.js.map