/// <reference path="_all.ts" />

module AdminApp {
    angular.module('adminApp', ['ngMaterial', 'ngMdIcons'])
        .controller('dashboardController', DashboardController)
        .controller('mainController', MainController);
}
