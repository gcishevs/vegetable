﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Entities;

namespace vegetable.core.Data
{
    public class BaseInfoDbContext : DbContext
    {
        // Connection string by default
        private readonly string _connectionString = "Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=BaseInfo";

        public BaseInfoDbContext(DbContextOptions<BaseInfoDbContext> options)
            : base(options)
        { }
               
        public BaseInfoDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Holder> Holders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
            => optionsBuilder.UseSqlServer(_connectionString);
    }

   
    //We need this only for migrates
    public class BaseInfoDbContextFactory : IDbContextFactory<BaseInfoDbContext>
    {
        public BaseInfoDbContext Create(DbContextFactoryOptions options)
        {
            var optionsBuilder = new DbContextOptionsBuilder<BaseInfoDbContext>();
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=BaseInfo");

            return new BaseInfoDbContext(optionsBuilder.Options);
        }
    }
}