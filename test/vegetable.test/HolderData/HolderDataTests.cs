using Xunit;
using vegetable.core.Services;
using vegetable.core.Data;
using vegetable.core.Entities;
using System;
using System.Collections.Generic;

namespace vegetable.test.HolderData
{
    public class HolderDataTests
    {
        public string Moniker { get; set; } = "mock";

        public Guid TestHolderId { get; set; } = Guid.NewGuid();

        public SqlHolderDataProvider _provider;

        public ElasticSearchHolderDataProvider _elasticSearchProvider;

        public HolderDataTests()
        {
            _elasticSearchProvider = new ElasticSearchHolderDataProvider("http://localhost:9200", "vegetable");
            //LoadTestHolder();
        }

        [Fact]
        public void CanReturnHolerDataForExistingMoniker()
        {
            var holderDataService = new MockHolderData();
            var holder = holderDataService.GetHolderData("mock");

            Assert.NotNull(holder);

        }

        [Fact]
        public void CanGetHolerDataByMoniker()
        {

            //Act
            var result = _provider.GetHolder(Moniker);

            //Assert

            Assert.NotNull(result);
            Assert.Equal(Moniker, result.Moniker);
            Assert.NotNull(result.Addresses);
            Assert.NotNull(result.SocialNetworks);
            Assert.NotNull(result.Tags);

        }

        #region ElasticSearchProvider tests
        [Fact]
        public void CanAddAndGetHolderData_ES()
        {
            //Act
            var holderId = Guid.NewGuid();
            var moniker = "mock";

            var testHolder = new Holder
            {
                HolderId = holderId,
                Moniker = moniker,
                Description = "This is test moniker",
                Title = "Test moniker",
                TimeStamp = DateTime.UtcNow,
                Tags = new List<Tag>
                {
                    new Tag { Id = 1, Name = "First Tag" },
                    new Tag { Id = 2, Name = "Seconds Tag" }
                },
                SocialNetworks = new List<SocialNetwork>
                {
                    new SocialNetwork { SocialNetworkId = Guid.NewGuid(), Type = SocialNetworkTypes.Facebook, Url = "http://test" }
                },
                Address = new Address
                {
                    AddressId = new Guid(),
                    Country = "USA",
                    State = "TX",
                    City = "Dallas",
                    PostalCode = "12345-123",
                    Street = "Mock way",
                    Unit = "55",
                    PhoneNumbers = new PhoneNumber[] { new PhoneNumber { Number = "9876543210" } },
                    Email = "mock@gmail.com"
                }
            };

            _elasticSearchProvider.AddHolder(testHolder);

            var holderByMoniker = _elasticSearchProvider.GetHolder(moniker);
            var holderById = _elasticSearchProvider.GetHolder(holderId);

            //Assert

            Assert.NotNull(holderById);
            Assert.Equal(moniker, holderById.Moniker);

            Assert.NotNull(holderByMoniker);
            Assert.Equal(moniker, holderByMoniker.Moniker);
        }

        [Fact]
        public void CanDeleteHolderDataById_ES()
        {
            //Act
            var holderId = Guid.NewGuid();
            var moniker = "mock";

            _elasticSearchProvider.AddHolder(new Holder()
            {
                HolderId = holderId,
                Moniker = moniker
            });

            _elasticSearchProvider.DeleteHolder(holderId);

            var holderById = _elasticSearchProvider.GetHolder(holderId);

            //Assert

            Assert.Null(holderById);
        }

        [Fact]
        public void CanDeleteHolderDataByMoniker_ES()
        {
            //Act
            var holderId = Guid.NewGuid();
            var moniker = "mock";

            _elasticSearchProvider.AddHolder(new Holder()
            {
                HolderId = holderId,
                Moniker = moniker
            });

            _elasticSearchProvider.DeleteHolder(moniker);

            var holderByMoniker = _elasticSearchProvider.GetHolder(moniker);

            //Assert

            Assert.Null(holderByMoniker);
        }

        [Fact]
        public void CanUpdateHolderDataById_ES()
        {
            //Act
            var holderId = Guid.NewGuid();
            var moniker = "mock";

            _elasticSearchProvider.AddHolder(new Holder
            {
                HolderId = holderId,
                Moniker = moniker,
                Description = "This is test moniker",
                Title = "Test moniker",
            });

            var updatedHolder = new Holder
            {
                HolderId = holderId,
                Moniker = moniker,
                Description = "This is test moniker" + " updated",
                Title = "Test moniker" + " updated",
            };

            _elasticSearchProvider.UpdateHolder(holderId, updatedHolder);

            var holderById = _elasticSearchProvider.GetHolder(holderId);

            //Assert

            Assert.Null(holderById);
        }
        #endregion

        public void LoadTestHolder()
        {
            try
            {
                var connectionString = "Data Source = (localdb)\\MSSQLLocalDB; Initial Catalog = BaseInfo";
                _provider = new SqlHolderDataProvider(connectionString, new SqlLogDataRepository(connectionString));
                var holderDataService = new MockHolderData();
                var holder = holderDataService.GetHolderData(Moniker);
                holder.Id = TestHolderId;

                _provider.AddHolder(holder);
            }
            catch 
            { }
        }
       
    }
}
