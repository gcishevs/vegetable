using Nest;
using System;
using System.Collections.Generic;

namespace vegetable.core.Entities
{
    public class Holder
    {
        public Guid HolderId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        [Text]
        public string Moniker { get; set; }

        [Nested]
        public IEnumerable<Tag> Tags { get; set; }

        public Address Address { get; set; }

        [Nested]
        public IEnumerable<SocialNetwork> SocialNetworks { get; set; }     
        
        [Date(Name ="@timestamp")]
        public DateTime TimeStamp { get; set; }         
    }
}
