using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace vegetable.core.Entities
{
    public class Address
    {
        public Guid AddressId { get; set; }

        public string Country { get; set; }

        public string State { get; set; }

        public string City { get; set; }

        public string PostalCode { get; set; }

        public string Street { get; set; }
        
        public string Unit { get; set; }

        public IEnumerable<PhoneNumber> PhoneNumbers { get; set; }

        public string Email { get; set; }

        public Guid HolderId { get; set; }

        [ForeignKey("HolderId")]
        public virtual Holder Holder { get; set; }
    }
}
