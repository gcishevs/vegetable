using Nest;
using System;
using vegetable.core.Entities;

namespace vegetable.core.Services
{
    public static class ElasticSearchConnection
    {
        public static ElasticClient GetElasticClient(string elasticSearchUri, string elasticSearchIndex)
        {
            var node = new Uri(elasticSearchUri);
            var settings = new ConnectionSettings(node).DefaultIndex(elasticSearchIndex);
            var client = new ElasticClient(settings);

            var request = new IndexExistsRequest(elasticSearchIndex);
            var result = client.IndexExists(request);

            if (!result.Exists)
            {
                client = CreateIndex(client, elasticSearchIndex);
            }

            return client;
        }

        private static ElasticClient CreateIndex(ElasticClient client, string elasticSearchIndex)
        {
            var indexState = new IndexState
            {
                Settings = new IndexSettings
                {
                    NumberOfShards = 5,
                    NumberOfReplicas = 2
                }
            };

            client.CreateIndex(elasticSearchIndex, i => i
                .InitializeUsing(indexState)
                .Mappings(ms => ms
                    .Map<Holder>(m => m.AutoMap())
                )
            );

            return client;
        }
    }
}
