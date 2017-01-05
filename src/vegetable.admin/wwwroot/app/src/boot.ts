/// <reference path="_all.ts" />

module AdminApp {
    angular.module('adminApp', ['ngMaterial'])
        .controller('dashboardController', DashboardController)
        .controller('mainController', MainController);
}
