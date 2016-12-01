
using System;

namespace vegetable.core.Entities
{
    public class Holder
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Moniker { get; set; }

        public string[] Tags { get; set; }

        public Address Address { get; set; }

        public SocialNetwork[] SocialNetworks { get; set; }
              
    }
}
