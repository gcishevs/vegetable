using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Entities;

namespace vegetable.core.Data
{
    public class LoggingDbContext : DbContext
    {
        // Connection string by default
        private readonly string _connectionString = "Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=BaseInfo";

        public LoggingDbContext(DbContextOptions<LoggingDbContext> options)
            : base(options)
        { }

        public LoggingDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Log> Logs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlServer(_connectionString);
    }

    //We need this only for migrates
    public class LoggingDbContextFactory : IDbContextFactory<LoggingDbContext>
    {
        public LoggingDbContext Create(DbContextFactoryOptions options)
        {
            var optionsBuilder = new DbContextOptionsBuilder<LoggingDbContext>();
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=BaseInfo");

            return new LoggingDbContext(optionsBuilder.Options);
        }
    }
}
