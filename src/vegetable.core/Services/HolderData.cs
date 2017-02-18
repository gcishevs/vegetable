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
                    Moniker = "mock2",
                    Email = "mock@gmail.com",
                    Tags = new Tag[]
                    {
                        new Tag { Name = "mock"},
                        new Tag { Name = "fake"}
                    },
                    Country = "Россия",
                    Addresses = new Address[] { new Address
                    {
                        Id = new Guid(),                        
                        State = "Краснодарский край",
                        City = "Краснодар",
                        PostalCode = "12345123",
                        Street = "Промышленная",
                        Unit = "33",
                        Points = "45.03974400147349,38.99748299999999", 
                        Description = "Главный офис",
                        PhoneNumbers = new PhoneNumber[] { new PhoneNumber { Number = "9876543210", Type = PhoneNumberType.Classic } }
                        
                    }},
                    SocialNetworks = new SocialNetwork[] {

                        new SocialNetwork {
                            Id = new Guid(),
                            Type = SocialNetworkTypes.VK,
                            Url = "https://vk.com/mock"
                        },

                        new SocialNetwork {
                            Id = new Guid(),
                            Type = SocialNetworkTypes.Twitter,
                            Url = "https://twitter.com/mock"
                        },

                        new SocialNetwork {
                            Id = new Guid(),
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
