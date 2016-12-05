using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using vegetable.core.Data;

namespace vegetable.admin.Controllers
{
    [Route("api/[controller]")]
    public class AddressDataController : Controller
    {
        public readonly IMemoryCache _memoryCache;
        public readonly IAddressDataProvider _addressProvider;

        public const string COUNTRYLIST_CACHE_KEY = "__COUNTRIES_LIST";

        public AddressDataController(IAddressDataProvider addressProvider, IMemoryCache memoryCache)
        {
            _addressProvider = addressProvider;
            _memoryCache = memoryCache;
        }

        [HttpGet("[action]")]
        public IEnumerable<string> AddressItemList(AddressDataType type)
        {
            switch (type)
            {
                case AddressDataType.Countries: return GetCountries();
            }

            return GetCountries();

        }

        public IEnumerable<string> GetCountries()
        {
            IEnumerable<string> cachedCountries;

            if (!_memoryCache.TryGetValue(COUNTRYLIST_CACHE_KEY, out cachedCountries))
            {
                cachedCountries = _addressProvider.GetCountryList();
                _memoryCache.Set<IEnumerable<string>>(COUNTRYLIST_CACHE_KEY, cachedCountries);
            }

            return cachedCountries;
        }
    }

    public enum AddressDataType : short
    {
        Countries,
        Regions,
        Cities        
    }

}
