using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Exceptions
{
    public class MonikerIsAlreadyExistException : Exception
    {
        string _moniker;

        public MonikerIsAlreadyExistException() : base() { }

        public MonikerIsAlreadyExistException(string message) : base(message) { }

        public MonikerIsAlreadyExistException(string message, string moniker) : base(message)
        {
            _moniker = moniker;
        }

        public string Moniker { get { return _moniker; } }
    }
}
