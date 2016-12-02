using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Entities
{
    public class PhoneNumber
    {
        public int Id { get; set; }

        public string Number { get; set; }

        public PhoneNumberType Type { get; set; }
    }

    public enum PhoneNumberType : short
    {
        Home = 0,
        Mobile = 1
    }
}
