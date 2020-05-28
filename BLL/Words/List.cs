using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using DAL;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BLL.Words
{
    public class List
    {
        public class Query : IRequest<List<WordDto>> { }

        public class Handler : IRequestHandler<Query, List<WordDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<WordDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var words = await _context.Words.ToListAsync();

                return _mapper.Map<List<Word>, List<WordDto>>(words);

                
            }
        }
    }
}