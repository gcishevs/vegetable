using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Entities;

namespace vegetable.core.Data
{
    public interface IHolderDataProvider
    {
        Holder GetHolder(string moniker);

        void AddHolder(Holder holder);

        void UpdateHolder(Guid holderId, Holder holderData);

        void DeleteHolder(Guid holderId);
    }
}
