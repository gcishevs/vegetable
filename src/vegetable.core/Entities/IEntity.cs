using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Entities
{
    public interface IEntity
    {
        Guid Id { get; set; }
    }
}
