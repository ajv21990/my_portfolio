using Shopping_Cart.Web.Domains;
using Shopping_Cart.Web.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shopping_Cart.Web.Interfaces
{
    public interface IItemInterface
    {
        int RegisterItem(ItemRequest itemRequest);
        List<ItemDomain> SelectAllItems();
        List<ItemDomain> SelectById(int id);
        bool DeleteItem(int id);
    }
}