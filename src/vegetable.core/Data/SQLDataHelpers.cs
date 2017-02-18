using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using vegetable.core.Entities;
using System.Collections;
using vegetable.core.Common;
using System.Reflection;

namespace vegetable.core.Data
{
    public static class SQLDataHelpers
    {
        public static void CheckForRemove(this IEntity source, IEntity target, BaseInfoDbContext context)
        {
            foreach (var prop in source.GetType().GetProperties())
            {
                if (typeof(IEnumerable<IEntity>).IsAssignableFrom(prop.PropertyType))
                {                   
                    var targetProp = target.GetType().GetProperty(prop.Name);
                    if (targetProp == null) continue;
                    var sourceValue = (IEnumerable<IEntity>)prop.GetValue(source);
                    var targetValue = (IEnumerable <IEntity>)targetProp.GetValue(target);

                    if (sourceValue == null || targetValue == null)
                    {
                        throw new NullReferenceException("Source value or target value is null");
                    }

                    foreach (var child in sourceValue)
                    {
                        target = targetValue.FirstOrDefault(t => t.Id == child.Id);
                        if (target == null) continue;
                        child.CheckForRemove(target, context);
                    }

                    var forRemove = sourceValue.Except(targetValue, (x, y) => x.Id == y.Id);
                    foreach (var item in forRemove)
                    {
                        var dbSet = context.GetDbSet(item);
                        if (dbSet != null)
                        {
                            var itemToRemove = dbSet.Find(item.Id);
                            context.Remove(itemToRemove);
                        }
                    }
                }
            }
        }

        public static dynamic GetDbSet<T>(this BaseInfoDbContext context, T entity) where T: class
        {
            foreach (var prop in context.GetType().GetProperties())
            {
                var dbSetType = typeof(DbSet<>).MakeGenericType(entity.GetType());

                if (dbSetType.IsAssignableFrom(prop.PropertyType))
                {
                     return prop.GetValue(context);
                }
            }

            return null;
        }
    }
}
