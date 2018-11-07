using Eleveight.Data;
using Eleveight.Data.Providers;

namespace Eleveight.Services
{
    public abstract class BaseService
    {
        public IDataProvider DataProvider { get; set; }

        public BaseService() // our constructor - name name is the same as the case
        {
            this.DataProvider = new SqlDataProvider("Server = (local);Database=Shopping Cart;User Id=Shopper_AJ;Password=Shopper1!");
        }
    }
}