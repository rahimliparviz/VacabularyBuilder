using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace DAL
{
    public class Seed
    {
        public static async Task SeedData(DataContext context,UserManager<AppUser> userManager){
             if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        Id = "a",
                        DisplayName = "Parviz",
                        Email = "parviz@test.com"
                    },
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (!context.Words.Any()) {
                var activities = new List<Word>
                {
                    new Word
                    {
                        Phrase = "Pen",
                        Translates = new List<Translate>
                        {
                            new Translate
                            {
                                Locale = "az",
                                Translation = "Qələm",
                            }
                        }
                    },
                  new Word
                    {
                        Phrase = "Horse",
                        Translates = new List<Translate>
                        {
                            new Translate
                            {
                                Locale = "az",
                                Translation = "At",
                            }
                        }
                    },
     
                };

                await context.Words.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}