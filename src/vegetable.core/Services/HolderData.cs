using System;
using vegetable.core.Entities;

namespace vegetable.core.Services
{
    public interface IHolderData
    {
        Holder GetHolderData(string moniker);
    }

    public class HolderData : IHolderData
    {
        public Holder GetHolderData(string moniker)
        {
            throw new NotImplementedException();
        }
    }

    public class MockHolderData : IHolderData
    {
        public Holder GetHolderData(string moniker)
        {
            if (moniker.ToLower() == "mock")
            {

                return new Holder
                {
                    Title = "Mock Salon",
                    Description = "We are super team. We mock any data...",
                    Moniker = "mock",
                    Tags = new string[] { "mock", "fake" },
                    Address = new Address
                    {
                        AddressId = new Guid(),
                        Country = "USA",
                        State = "TX",
                        City = "Dallas",
                        PostalCode = "12345-123",
                        Street = "Mock way",
                        Unit = "55",
                        PhoneNumbers = new string[] { "9876543210" },
                        Email = "mock@gmail.com"
                    },
                    SocialNetworks = new SocialNetwork[] {

                        new SocialNetwork {
                            SocialNetworkId = new Guid(),
                            Type = SocialNetworkTypes.VK,
                            Url = "https://vk.com/mock"
                        },

                        new SocialNetwork {
                            SocialNetworkId = new Guid(),
                            Type = SocialNetworkTypes.Twitter,
                            Url = "https://twitter.com/mock"
                        },

                        new SocialNetwork {
                            SocialNetworkId = new Guid(),
                            Type = SocialNetworkTypes.Facebook,
                            Url = "https://facebook.com/mock"
                        }
                    }
                };
            }

            return null;
        }
    }
}
