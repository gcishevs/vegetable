/// <reference path="../_all.ts" />

module AdminApp {

    export interface IHolderService {
        GetAll(successCallback: Function);
    }

    export class HolderService {

        http: ng.IHttpService;
        location: ng.ILocationService;

        constructor($http: ng.IHttpService, $location: ng.ILocationService) {
            this.http = $http;
            this.location = $location;
        }

        GetAll(successCallback: Function) {
            this.http.get(this.location.absUrl()).success((data, status) => {
                successCallback(data);
            }).error(error => {
                successCallback(error);
            });
        }
    }
}