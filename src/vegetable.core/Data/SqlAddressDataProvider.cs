using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Data
{
    public class SqlAddressDataProvider : IAddressDataProvider
    {
        private readonly string _connectionString;

        public SqlAddressDataProvider(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<string> GetCountryList()
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                return context.Countries.Select(c => c.CountryName).ToList();
            }
        }
    }
}
