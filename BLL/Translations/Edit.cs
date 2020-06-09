using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using BLL.Errors;
using DAL;
using FluentValidation;
using MediatR;

namespace BLL.Translations
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Translation { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Translation).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            public DataContext context { get; set; }
            public Handler(DataContext context)
            {
                this.context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var translation = await context.Translates.FindAsync(request.Id);

                if (translation == null)
                {
                    throw new CustomException(HttpStatusCode.NotFound, new { Translation = "Not found" });
                }

                translation.Translation= request.Translation ?? translation.Translation;
                       var success = await context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Proble on saving activity");
            }
        }

    }
}