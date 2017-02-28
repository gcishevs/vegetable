var AdminApp;
(function (AdminApp) {
    var HomeController = (function () {
        function HomeController(authService) {
            this.authService = authService;
        }
        return HomeController;
    }());
    AdminApp.HomeController = HomeController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=HomeController.js.map