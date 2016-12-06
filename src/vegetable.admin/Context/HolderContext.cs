using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Data;
using vegetable.core.Entities;

namespace vegetable.admin.Context
{
    public class HolderContext
    {
        public readonly IMemoryCache _memoryCache;
        public readonly IHolderDataProvider _holderProvider;

        public const string HOLDER_CACHE_KEY = "__CURRENT_HOLDER";

        public HolderContext(IMemoryCache cache, IHolderDataProvider holderProvider)
        {
            _memoryCache = cache;
            _holderProvider = holderProvider;
        }

        public void IdentifyCurrentHolder(Guid id)
        {
            var holder = _holderProvider.GetHolder(id);
            if (holder == null)
            {
                //So.. it is a new holder. (Need to review logic)
                holder = new Holder() { HolderId = id };
            }

            this.CurrentHolder = holder;

        }

        public Holder CurrentHolder
        {
            get
            {
                Holder cachedHolder;

                if (!_memoryCache.TryGetValue(HOLDER_CACHE_KEY, out cachedHolder))
                {
                    return null;
                }

                return cachedHolder;
            }
            set
            {
                var opts = new MemoryCacheEntryOptions()
                {
                    SlidingExpiration = TimeSpan.FromHours(2)
                };

                _memoryCache.Set(HOLDER_CACHE_KEY, value, opts);
            }
        }

        public bool IsNewHolder
        {
            get
            {
                return CurrentHolder.HolderId != Guid.Empty 
                    && string.IsNullOrEmpty(CurrentHolder.Moniker);
            }
        }

    }
}
