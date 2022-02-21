namespace SuperHeroAPI
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string Content { get; set; } = string.Empty;
        public string Published { get; set; } = string.Empty;
        public int BlogerId { get; set; } 
        public int ArticleId { get; set; }
    }
}
