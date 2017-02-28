using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Entities;

namespace vegetable.core.Data
{
    public interface ILogRepository
    {
        void AddLog(Log logInfo);

        void AddError(string message);
    }
}
