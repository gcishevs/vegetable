using Microsoft.EntityFrameworkCore;
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

        public DbSet<Address> Addresses { get; set; }

        public DbSet<PhoneNumber> PhoneNumbers { get; set; }

        public DbSet<Country> Countries { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
            => optionsBuilder.UseSqlServer(_connectionString);

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Address>().HasOne(p => p.Holder).
            //    WithMany(b => b.Addresses);

            modelBuilder.Entity<Holder>().HasMany(p => p.Addresses).WithOne();
            modelBuilder.Entity<Address>().HasMany(p => p.PhoneNumbers).WithOne();

            modelBuilder.Entity<Country>().Property(p => p.CountryCode).HasColumnType("varchar(3)");
            modelBuilder.Entity<Country>(b =>
            {
                b.HasKey(e => e.CountryId);
                b.Property(e => e.CountryId).ValueGeneratedOnAdd();
            });
        }


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
