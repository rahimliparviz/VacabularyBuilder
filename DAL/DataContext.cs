using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Word> Words{get;set;}
        public DbSet<Translate> Translates{ get; set; }
        public DbSet<UserWord> UserWords{ get; set; }

        protected override void OnModelCreating(ModelBuilder builder){
            
        }
    }
}
