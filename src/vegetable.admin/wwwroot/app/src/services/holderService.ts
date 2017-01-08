/// <reference path="../_all.ts" />

module AdminApp {

    export interface IHolderService {
        getHolder(): ng.IPromise<BasePersonalInfo>;
    }

    class HolderService implements IHolderService {
        constructor(private $http: angular.IHttpService) { return; }

        getHolder = () => {
            return this.$http.get('/api/user');
        }

    }
}