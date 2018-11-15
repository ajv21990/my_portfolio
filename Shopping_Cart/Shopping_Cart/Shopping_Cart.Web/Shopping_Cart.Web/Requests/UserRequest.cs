using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shopping_Cart.Web.Requests
{
    public class UserRequest
    {
        public string FName { get; set; }
        public string LName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}