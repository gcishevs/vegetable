/// <reference path="../_all.ts" />

module AdminApp {
    export class CacheService {
        static $inject = ['CacheFactory']
        public holderCache: angularcache.Cache;

        constructor(private cacheFactory: angularcache.CacheFactory) {
            var holderCacheKey: string = 'holderCache';
            if (!cacheFactory.get(holderCacheKey)) {
                cacheFactory.createCache(holderCacheKey, {
                    deleteOnExpire: 'aggressive',
                    recycleFreq: 60000
                });
            }
            this.holderCache = cacheFactory.get(holderCacheKey);
        }


    }
}