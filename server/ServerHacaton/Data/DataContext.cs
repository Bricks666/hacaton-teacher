using Microsoft.EntityFrameworkCore;

namespace SuperHeroAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<BlogUser> Bloger { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<ArticleTag> ArticleTags { get; set; }
        public DbSet<Bloger>  Blogers { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Tag> TagModels { get; set; }

    }
}
