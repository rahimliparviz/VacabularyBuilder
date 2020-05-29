using System;
using System.Net;

namespace BLL.Errors
{
    public class CustomException:Exception
    {
       private readonly HttpStatusCode _code;
        private readonly object _errors;
        public CustomException(HttpStatusCode code, object errors=null)
        {
            this._errors = errors;
            this._code = code;
        }

        public HttpStatusCode Code {get;}
        public object Errors {get;}
    }
}