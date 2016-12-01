using Xunit;
using vegetable.core.Services;

namespace vegetable.test.HolderData
{
    public class HolderDataTests
    {
        [Fact]
        public void CanReturnHolerDataForExistingMoniker()
        {
            var holderDataService = new MockHolderData();
            var holder = holderDataService.GetHolderData("mock");

            Assert.NotNull(holder);

        }
    }
}
