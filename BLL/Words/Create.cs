using System;
using System.Threading;
using System.Threading.Tasks;
using DAL;
using MediatR;
using Domain;
using FluentValidation;
using System.Collections.Generic;
using BLL.DTO;

namespace BLL.Words
{
    public class Create
    {
     public class Command : IRequest{
         public Guid Id { get; set; }
         public string Phrase { get; set; }
        public  ICollection<TranslateDto> Translates{ get; set; }

     }  

    public class CommandValidator:AbstractValidator<Command>{
        public CommandValidator()
        {
            RuleFor(x=>x.Phrase).NotEmpty();
            RuleFor(x=>x.Translates).NotEmpty();
        }
    }

     public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context )
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var word = new Domain.Word{
                    Id= request.Id,
                    Phrase = request.Phrase
                };

                _context.Words.Add(word);

                foreach (var tr in request.Translates)
                {
                var translation = new Translate{
                    Id = tr.Id,
                    Locale= tr.Locale,
                    Translation=tr.Translation,
                    Word=word
                };
                
                    _context.Translates.Add(translation);
                }


                // var translation = new Translate{
                //     Locale= "az",
                //     Translation=request.Translation,
                //     Word=word
                // };
                
                // _context.Translates.Add(translation);


                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Proble on saving activity");
            }
        }
    }
}