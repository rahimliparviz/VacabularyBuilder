using System;
using System.Collections.Generic;

namespace Domain
{
    public class Word
    {
        public Guid Id { get; set; }
        public string Phrase { get; set; }
        public virtual ICollection<Translate> Translates{ get; set; }

    }
}