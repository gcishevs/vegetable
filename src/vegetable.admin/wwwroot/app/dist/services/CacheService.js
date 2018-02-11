/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var CacheService = (function () {
        function CacheService(cacheFactory) {
            this.cacheFactory = cacheFactory;
            var holderCacheKey = 'holderCache';
            if (!cacheFactory.get(holderCacheKey)) {
                cacheFactory.createCache(holderCacheKey, {
                    deleteOnExpire: 'aggressive',
                    recycleFreq: 60000
                });
            }
            this.holderCache = cacheFactory.get(holderCacheKey);
        }
        CacheService.$inject = ['CacheFactory'];
        return CacheService;
    }());
    AdminApp.CacheService = CacheService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=CacheService.js.map