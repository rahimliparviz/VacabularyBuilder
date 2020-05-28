using System;

namespace BLL.DTO
{
    public class TranslateDto
    {
        public Guid Id { get; set; }
        public string Locale { get; set; }
        public string Translation { get; set; }
    }
}