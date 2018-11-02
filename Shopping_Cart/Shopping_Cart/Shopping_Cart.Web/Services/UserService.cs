using Eleveight.Data.Providers;
using Eleveight.Services;
using Shopping_Cart.Web.Interfaces;
using Shopping_Cart.Web.Requests;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Shopping_Cart.Web.Services
{
    public class UserService : BaseService, IUserService
    {
        private IDataProvider _dataProvider;

        public UserService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        public string Register(UserRequest userRequest)
        {
            string GUID = null;

            _dataProvider.ExecuteNonQuery(
                "User_Register",
                inputParamMapper: (SqlParameterCollection parms) =>
                {
                    SqlParameter paramId = new SqlParameter("ID", 0);
                    parms.AddWithValue("@FName", userRequest.FName);
                    parms.AddWithValue("@LName", userRequest.LName);
                    parms.AddWithValue("@Email", userRequest.Email);
                    parms.AddWithValue("@Password", userRequest.Password);
                    parms.AddWithValue("@ConfirmPassword", userRequest.ConfirmPassword);
                },
                returnParameters: (SqlParameterCollection parms) =>
                 {
                     GUID = parms["@ID"].Value.ToString();
                 });
            return GUID;
        }
    }
}