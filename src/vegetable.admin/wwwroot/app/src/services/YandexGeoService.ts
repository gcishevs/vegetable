/// <reference path="../_all.ts" />

module AdminApp {

    export interface IYandexGeoService {
        GetPointsByAddress(address: string): ng.IPromise<any>;
    }

    export class YandexGeoService implements IYandexGeoService {

        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
        }

        GetPointsByAddress (address: string): ng.IPromise<any> {
            return this.$http.get("https://geocode-maps.yandex.ru/1.x/?format=json&results=1&geocode=" + address);  
        }
    }
}