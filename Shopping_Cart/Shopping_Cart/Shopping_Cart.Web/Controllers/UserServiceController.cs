﻿using Eleveight.Models.Responses;
using Shopping_Cart.Web.Interfaces;
using Shopping_Cart.Web.Requests;
using Shopping_Cart.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Shopping_Cart.Web.Controllers
{
    [RoutePrefix("api/userservice")]
    public class UserServiceController : ApiController
    {
        IUserService _userService;

        public UserServiceController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("register")]
        public IHttpActionResult Register(UserRequest model)
        {
            ItemResponse<string> resp = new ItemResponse<string>
            {
                Item = _userService.Register(model)
            };
            return Ok(resp);
        }
        
    }
}
