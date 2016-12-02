
using System;
using System.Collections.Generic;

namespace vegetable.core.Entities
{
    public class Holder
    {
        public Guid HolderId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Moniker { get; set; }

        public IEnumerable<Tag> Tags { get; set; }

        public Address Address { get; set; }

        public IEnumerable<SocialNetwork> SocialNetworks { get; set; }
              
    }
}
