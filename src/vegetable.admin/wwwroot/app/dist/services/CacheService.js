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
        return CacheService;
    }());
    CacheService.$inject = ['CacheFactory'];
    AdminApp.CacheService = CacheService;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=CacheService.js.map