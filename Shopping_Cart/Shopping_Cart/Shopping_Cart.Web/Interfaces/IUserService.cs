using Shopping_Cart.Web.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shopping_Cart.Web.Interfaces
{
    public interface IUserService
    {
         string Register(UserRequest userRequest);
    }
}