using Nest;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vegetable.core.Entities
{
    public class Address : IEntity
    {
        public Guid Id { get; set; }

        [MaxLength(50)]
        public string Description { get; set; }

        [MaxLength(50)]
        public string State { get; set; }

        [MaxLength(30)]
        public string City { get; set; }

        [MaxLength(10)]
        public string PostalCode { get; set; }

        [MaxLength(50)]
        public string Street { get; set; }

        [MaxLength(50)]
        public string Unit { get; set; }

        [Nested]
        public IEnumerable<PhoneNumber> PhoneNumbers { get; set; }

        [MaxLength(50)]
        public string Points { get; set; }

        //public Holder Holder { get; set; }
    }
}
