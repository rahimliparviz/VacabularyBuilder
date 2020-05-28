using System;
using System.Collections.Generic;

namespace BLL.DTO
{
    public class WordDto
    {
        public Guid Id { get; set; }
        public string Phrase { get; set; }
        public virtual ICollection<TranslateDto> Translates{ get; set; }
    }
}