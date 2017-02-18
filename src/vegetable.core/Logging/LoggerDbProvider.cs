using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Data;
using vegetable.core.Entities;

namespace vegetable.core.Logging
{
    public class LoggerDbProvider : ILoggerProvider
    {
        private ILogRepository _repo;

        public LoggerDbProvider(ILogRepository repo)
        {
            _repo = repo;
        }

        public ILogger CreateLogger(string applicationName)
        {
            return new Logger(applicationName, _repo);
        }

        public void Dispose()
        {
        }

        public class Logger : ILogger
        {
            private readonly string _applicationName;
            private readonly ILogRepository _repo;

            public Logger(string applicationName, ILogRepository repo)
            {
                _repo = repo;
                _applicationName = applicationName;
            }

            public bool IsEnabled(LogLevel logLevel)
            {
                return true;
            }

            public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            {
                if (logLevel == LogLevel.Critical || logLevel == LogLevel.Error || logLevel == LogLevel.Warning || logLevel == LogLevel.Warning)
                    RecordMsg(logLevel, eventId, state, exception, formatter);
            }

            private void RecordMsg<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            {
                _repo.AddLog(new Log
                {
                    LogLevel = logLevel.ToString().ToUpper(),
                    AppName = new String(_applicationName.Take(40).ToArray()),
                    Message = formatter(state, exception),
                    User = "username",
                    Date = DateTime.Now
                });
            }

            public IDisposable BeginScope<TState>(TState state)
            {
                return new NoopDisposable();
            }

            private class NoopDisposable : IDisposable
            {
                public void Dispose()
                {
                }
            }
        }
    }
}
