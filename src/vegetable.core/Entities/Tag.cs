using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Entities
{
    public class Tag
    {
        public long Id { get; set; }

        [MaxLength(20)]
        public string Name { get; set; }
    }
}
