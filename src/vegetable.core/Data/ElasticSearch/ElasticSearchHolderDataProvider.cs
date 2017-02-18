using Nest;
using System;
using System.Linq;
using vegetable.core.Entities;
using vegetable.core.Services;

namespace vegetable.core.Data
{
    public class ElasticSearchHolderDataProvider : IHolderDataProvider
    {
        private ElasticClient _client;

        public ElasticSearchHolderDataProvider(string elasticSearchUri, string elasticSearchIndex)
        {
            _client = ElasticSearchConnection.GetElasticClient(elasticSearchUri, elasticSearchIndex);
        }

        public void AddHolder(Holder holder)
        {
            _client.Index(holder, a => a.Id(holder.HolderId)
                                        .Refresh(Elasticsearch.Net.Refresh.True));
        }

        public void DeleteHolder(string moniker)
        {
            _client.DeleteByQuery<Holder>
            (
                dq => dq
                .Query(q => q
                    .Match(m => m
                        .Field(f => f.Moniker)
                            .Query(moniker)
                    )
                )
                .Refresh()
            );
        }

        public void DeleteHolder(Guid holderId)
        {
            _client.DeleteByQuery<Holder>
            (
                dq => dq
                .Query(q => q
                    .Term(t => t
                        .Field(f => f.HolderId)
                        .Value(holderId)
                    )
                )
                .Refresh()
            );
        }

        public Holder GetHolder(Guid holderId)
        {
            var result = _client.Search<Holder>
            (
                s => s
                .Query(q => q
                    .Term(t => t
                        .Field(f => f.HolderId)
                        .Value(holderId)
                    )
                )
            );

            return result.Hits.Select(h => h.Source).FirstOrDefault();
        }

        public Holder GetHolder(string moniker)
        {
            var result = _client.Search<Holder>
            (
                s => s
                .Query(q => q
                    .Match(m => m
                        .Field(f => f.Moniker)
                            .Query(moniker)
                    )
                )
            );

            return result.Hits.Select(h => h.Source).FirstOrDefault();
        }

        public void UpdateHolder(Guid holderId, Holder holderData)
        {
            _client.Update<Holder, Holder>
            (
                holderId, 
                u => u
                .Doc(holderData)
                .Refresh(Elasticsearch.Net.Refresh.True)
            );
        }
    }
}
