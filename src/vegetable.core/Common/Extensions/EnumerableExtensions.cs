using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace vegetable.core.Common
{
    public static class EnumerableExtensions
    {
        public static IEnumerable<TSource> Except<TSource>(this IEnumerable<TSource> source, IEnumerable<TSource> second, Func<TSource, TSource, bool> comparer)
        {
            return source.Except(second, new LambdaComparer<TSource>(comparer));
        }
    }
}
