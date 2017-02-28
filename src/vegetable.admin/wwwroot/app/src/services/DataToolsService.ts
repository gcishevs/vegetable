/// <reference path="../_all.ts" />

module AdminApp {

    export interface IDataToolsService {
        GetAvailableTags(successCallback: Function);
    }

    export class DataToolsService implements IDataToolsService{

        http: ng.IHttpService;

        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        GetAvailableTags(successCallback: Function) {
            this.http.get<string[]>("/api/AvailableTags").then(function (success) {
                successCallback(success);
            }, function (error) {
                successCallback(error);
            });
        }
    }
}