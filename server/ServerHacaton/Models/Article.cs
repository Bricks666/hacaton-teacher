namespace SuperHeroAPI
{
    public class Article
    {
        public int ArticleId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Published { get; set; } = string.Empty;
        public string BlogerId { get; set; } = string.Empty;
    }
}
