using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using BLL.Errors;
using DAL;
using MediatR;

namespace BLL.Words
{
    public class Edit
    {
        public class Command:IRequest{
        public Guid Id { get; set; }
         public string Phrase { get; set; }
        }

         public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context){
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                
                var word = await _context.Words.FindAsync(request.Id);

                if (word == null)
                {
                    throw new CustomException(HttpStatusCode.NotFound, new { Activity = "Not found" });
                }

                word.Phrase = request.Phrase ?? word.Phrase;
           

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Proble on saving activity");
            }
        }
        
    }
}