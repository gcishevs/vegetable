using System;
using vegetable.core.Data;
using vegetable.core.Entities;

namespace vegetable.core.Services
{
    public interface IHolderData
    {
        Holder GetHolderData(string moniker);
    }

    public class HolderData : IHolderData
    {
        IHolderDataProvider _provider;

        public HolderData(IHolderDataProvider provider)
        {
            _provider = provider;
        }

        public Holder GetHolderData(string moniker)
        {
            return _provider.GetHolder(moniker);
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
                    Tags = new Tag[]
                    {
                        new Tag { Name = "mock"},
                        new Tag { Name = "fake"}
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
