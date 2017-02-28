using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using vegetable.core.Entities;
using vegetable.core.Exceptions;

namespace vegetable.core.Data
{
    public class SqlHolderDataProvider : IHolderDataProvider
    {
        BaseInfoDbContext _context;
        ILogRepository _logger;
        private readonly string _connectionString;       

        public SqlHolderDataProvider(string connectionString, ILogRepository logger)
        {
            _connectionString = connectionString;
            _logger = logger;
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
            try
            {
                using (var context = new BaseInfoDbContext(_connectionString))
                {
                    return context.Holders
                        .Include(h => h.Addresses).ThenInclude(a => a.PhoneNumbers)
                        .Include(h => h.SocialNetworks)
                        .Include(h => h.Tags)
                        .First(h => h.Moniker == moniker);
                }
            }
            catch (ArgumentNullException ex)
            {
                _logger.AddError(ex.Message);
                return null;
            }
            catch (InvalidOperationException ex)
            {
                _logger.AddError(ex.Message);
                return null;
            }
        }

        public void UpdateHolder(Guid holderId, Holder holderData)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                context.Holders.Update(holderData);
                context.Entry(holderData).State = EntityState.Modified;
                context.SaveChanges();
            }
        }

        public void UpdateHolder(Holder holderData)
        {
            // Check input value
            if (holderData == null)
            {
                _logger.AddError("HolderData is null when call UpdateHolder method");
                throw new ArgumentNullException("holderData", "HolderData is null when call UpdateHolder method");
            }

            //  Get current holder We need to update
            var holder = GetHolder(holderData.Id);

            // Check existing current holder 
            if (holder == null)
            {
                _logger.AddError("Cannot to get holder for update");
                throw new ArgumentNullException("holder", "Holder is null while update!");
            }

            try
            {
                using (var context = new BaseInfoDbContext(_connectionString))
                {
                    holder.CheckForRemove(holderData, context);
                    holder = holderData;
                    context.Update(holder);
                    context.SaveChanges();
                }
            }
            catch (NullReferenceException ex)
            {
                _logger.AddError("Issue with updating holder");
                _logger.AddError(ex.Message);
                throw new NullReferenceException("Cannot to update holder", ex);
            }
        }

        public Holder GetHolder(Guid id)
        {
            using (var context = new BaseInfoDbContext(_connectionString))
            {
                return context.Holders
                    .Include(h => h.Addresses).ThenInclude(a => a.PhoneNumbers)
                    .Include(h => h.SocialNetworks)
                    .Include(h => h.Tags)
                    .FirstOrDefault(h => h.Id == id);
            }
        }     
    }
}
