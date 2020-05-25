using System;

namespace Domain
{
    public class UserWord
    {
        public Guid Id { get; set; }
        public string AppUserId { get; set; }
        public virtual AppUser AppUser { get; set; }
        public Guid WordId { get; set; }
        public virtual Word Word { get; set; }
        public int SeenCount { get; set; }
        public DateTime LastSaw { get; set; }
        public DateTime WillSee { get; set; }
        public bool Mastered { get; set; }
    }
}