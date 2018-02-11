/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var YandexGeoService = (function () {
        function YandexGeoService($http) {
            this.$http = $http;
        }
        YandexGeoService.prototype.GetPointsByAddress = function (address) {
            return this.$http.get("https://geocode-maps.yandex.ru/1.x/?format=json&results=1&geocode=" + address);
        };
        return YandexGeoService;
    }());
    YandexGeoService.$inject = ["$http"];
    AdminApp.YandexGeoService = YandexGeoService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=YandexGeoService.js.map