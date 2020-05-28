using System;

namespace Domain
{
    public class Translate
    {
        public Guid Id { get; set; }
        public Guid WordId { get; set; }
        public virtual Word Word { get; set; }
        public string Locale { get; set; }
        public string Translation { get; set; }
    }
}