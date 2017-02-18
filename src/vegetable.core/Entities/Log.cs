using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Entities
{
    public class Log
    {        
        public long LogId { get; set; }

        [MaxLength(15)]
        public string LogLevel { get; set; }

        [MaxLength(100)]
        public string AppName { get; set; }

        public string Message { get; set; }

        [MaxLength(50)]
        public string User { get; set; }

        public DateTime Date { get; set; }
    }   
}
