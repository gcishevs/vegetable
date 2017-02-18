using Nest;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace vegetable.core.Entities
{
    public class Holder: IEntity
    {
        public Guid Id { get; set; }

        [MaxLength(50)]
        public string Title { get; set; }

        [MaxLength(500)]
        public string Description { get; set; }

        [MaxLength(20)]
        public string Moniker { get; set; }

        [MaxLength(50)]
        public string Email { get; set; }

        public IEnumerable<Tag> Tags { get; set; }

        public IEnumerable<Address> Addresses { get; set; }

        public IEnumerable<SocialNetwork> SocialNetworks { get; set; }

        [MaxLength(20)]
        public string Country { get; set; }

        [Nested]
        public IEnumerable<SocialNetwork> SocialNetworks { get; set; }     
        
        [Date(Name ="@timestamp")]
        public DateTime TimeStamp { get; set; }         
    }
}
