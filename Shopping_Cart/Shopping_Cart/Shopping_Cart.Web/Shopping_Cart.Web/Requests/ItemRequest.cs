using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shopping_Cart.Web.Requests
{
    public class ItemRequest
    {
        public string ItemName { get; set; }
        public string ItemDescr { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}