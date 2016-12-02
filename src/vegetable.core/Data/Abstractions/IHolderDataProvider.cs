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

        void DeleteHolder(Guid holderId);

        void DeleteHolder(string moniker);

        void UpdateHolder(Guid holderId, Holder holderData);
    }
}
