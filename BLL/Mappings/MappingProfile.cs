using AutoMapper;
using BLL.DTO;
using Domain;

namespace BLL.Mappings
{
    public class MappingProfile:Profile
    {
        public MappingProfile(){
            CreateMap<Translate,TranslateDto>();
            CreateMap<Word,WordDto>();
        }
    }

    
}