using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vegetable.core.Entities;
using vegetable.core.Exceptions;

namespace vegetable.core.Data
{
    public class SqlHolderDataProvider : IHolderDataProvider
    {
        BaseInfoDbContext _context;
        private readonly string _connectionString;

        public SqlHolderDataProvider(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddHolder(Holder holder)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                if (context.Holders.Any(m => m.Moniker == holder.Moniker))
                {
                    throw new MonikerIsAlreadyExistException("Could not to add new hoilder with this moniker", holder.Moniker);
                }

                context.Holders.Add(holder);
                context.SaveChanges();
            }
        }

        public void DeleteHolder(Guid holderId)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                var holder = context.Find<Holder>(holderId);
                DeleteHolder(holder.Moniker);
            }
        }

        public void DeleteHolder(string moniker)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                var holderToRemove = GetHolder(moniker);

                if (holderToRemove != null)
                {
                    context.Remove(holderToRemove);
                    context.Holders.Remove(holderToRemove);
                    context.SaveChanges();
                }
            }
        }

        public Holder GetHolder(string moniker)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                return context.Holders
                    .Include(h => h.Address).ThenInclude(a => a.PhoneNumbers)
                    .Include(h => h.SocialNetworks)
                    .Include(h => h.Tags)
                    .FirstOrDefault(h => h.Moniker == moniker);
            }
        }

        public void UpdateHolder(Guid holderId, Holder holderData)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                context.Holders.Update(holderData);
                context.SaveChanges();
            }
        }

        public Holder GetHolder(Guid id)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                return context.Holders
                    .Include(h => h.Address).ThenInclude(a => a.PhoneNumbers)
                    .Include(h => h.SocialNetworks)
                    .Include(h => h.Tags)
                    .FirstOrDefault(h => h.HolderId == id);
            }
        }
    }
}
