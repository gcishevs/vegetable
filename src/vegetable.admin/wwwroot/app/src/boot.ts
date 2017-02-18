/// <reference path="_all.ts" />

module AdminApp {
    var appModule = angular.module('adminApp', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'ngMessages', 'ymaps', 'angular-cache'])
        .service('dataToolsService', DataToolsService)
        .service('yandexGeoService', YandexGeoService)
        .service('holderService', HolderService)
        .service('cacheService', CacheService)
        .service('toastMessagingService', ToastMessagingService)
        .controller('profileBaseController', ProfileBaseController)
        .controller('profileMainController', ProfileMainController)
        .controller('profileAddressesController', ProfileAddressesController)
        .controller('editAddressController', EditAddressController)
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
        })
        .config((CacheFactoryProvider) => {
            angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
        })
        .config(($mdThemingProvider) => {
            $mdThemingProvider.theme('success-toast')
            .backgroundPalette('green')
        })
        .config(($mdThemingProvider) => {
            $mdThemingProvider.theme('fail-toast')
                .backgroundPalette('red')
        });
}
