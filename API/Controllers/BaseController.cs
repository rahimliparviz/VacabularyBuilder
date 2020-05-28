using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        private IMediator _metiator;
        protected IMediator Mediator => _metiator ?? (_metiator = HttpContext.RequestServices.GetService<IMediator>());
    }
}