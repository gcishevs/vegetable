using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Entities
{
    public class PhoneNumber : IEntity
    {
        public Guid Id { get; set; }

        [MaxLength(20)]
        public string Number { get; set; }

        public PhoneNumberType Type { get; set; }
    }
  
    public enum PhoneNumberType : byte
    {
        Classic = 1,
        Mobile = 2
    }
}
