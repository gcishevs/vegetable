using Xunit;
using vegetable.core.Services;
using vegetable.core.Data;
using vegetable.core.Entities;
using System;

namespace vegetable.test.HolderData
{
    public class HolderDataTests
    {
        public HolderDataTests()
        {
            LoadTestHolder();
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
            Assert.NotNull(result.Address);
            Assert.NotNull(result.SocialNetworks);
            Assert.NotNull(result.Tags);

        }

        public string Moniker { get; set; } = "mock";

        public Guid TestHolderId { get; set; } = Guid.NewGuid();

        public SqlHolderDataProvider _provider;

        public void LoadTestHolder()
        {
            try
            {
                _provider = new SqlHolderDataProvider("Data Source = (localdb)\\MSSQLLocalDB; Initial Catalog = BaseInfo");
                var holderDataService = new MockHolderData();
                var holder = holderDataService.GetHolderData(Moniker);
                holder.HolderId = TestHolderId;

                _provider.AddHolder(holder);
            }
            catch 
            { }
        }
       
    }
}
