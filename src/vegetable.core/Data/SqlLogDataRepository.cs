using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Data;
using vegetable.core.Entities;

namespace vegetable.core.Data
{
    public class SqlLogDataRepository : ILogRepository
    {
        LoggingDbContext _context;
        private readonly string _connectionString;

        public SqlLogDataRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddLog(Log logInfo)
        {
            using (var context = new LoggingDbContext(_connectionString))
            {               
                context.Logs.Add(logInfo);
                context.SaveChanges();
            }
        }

        public void AddError(string message)
        {
            using (var context = new LoggingDbContext(_connectionString))
            {
                Log logInfo = new Log()
                {
                    LogLevel = LogLevel.Error.ToString(),
                    Message = message
                };

                context.Logs.Add(logInfo);
                context.SaveChanges();
            }
        }
    }
}
