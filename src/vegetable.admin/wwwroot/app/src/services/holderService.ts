/// <reference path="../_all.ts" />

module AdminApp {

    export interface IHolderService {
        GetCurrentHolder(): ng.IPromise<HolderInfo>;
        SaveHolder(holder: HolderInfo): void;
    }
    export class HolderService implements IHolderService {

        static $inject = ['$http', '$mdToast', 'cacheService', '$q', 'toastMessagingService'];

        constructor(private $http: ng.IHttpService,
            private $mdToast: ng.material.MDToastService,
            private cacheService: CacheService,
            private $q: ng.IQService,
            private toastMessagingService: IToastMessagingService) {
        }

        GetCurrentHolder(): ng.IPromise<any> {
            var defer = this.$q.defer();
            var cacheKey: string = 'currentHolder';
            var existingValue: HolderInfo = this.cacheService.holderCache.get(cacheKey);

            if (existingValue) {
                defer.resolve(existingValue);
                return defer.promise;
            }
            else {
                return this.$http.get("/api/holder")
                    .then((success) => {
                        this.$mdToast.show(this.$mdToast.simple().content('Loaded!'));
                        defer.resolve(success.data);
                        this.cacheService.holderCache.put(cacheKey, success.data)
                        return defer.promise;
                    },
                    (error) => {
                        this.toastMessagingService.SendFail(error);
                        defer.reject(error);
                    }
                    );
            }
        }

        SaveHolder(holder: HolderInfo): void {
            this.$http.post('/api/holder', holder).then((success) => {
                this.toastMessagingService.SendSuccess("!!The changes have been saved!");
            }, (error) => {
                this.toastMessagingService.SendFail(error);
            });
        }
    }
}