using System;

namespace vegetable.core.Entities
{
    public class SocialNetwork
    {
        public Guid SocialNetworkId { get; set; }

        public SocialNetworkTypes Type { get; set; }

        public string Url { get; set; }
    }

    public enum SocialNetworkTypes : short
    {
        Other = -1,
        Facebook = 1,
        LinkedIn = 2,
        Twitter = 3,
        Google = 4,
        YouTube = 5,
        Bookmark = 6,
        ProfileImage = 7,
        VK = 8,
        Odnoklassniki = 9,
        Pinterest = 10,
        Instagram = 11,
    }
}
