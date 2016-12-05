using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Data
{
    public interface IAddressDataProvider
    {
        IEnumerable<string> GetCountryList();
    }
}
