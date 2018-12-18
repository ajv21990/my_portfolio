using Eleveight.Data.Providers;
using Eleveight.Services;
using Shopping_Cart.Web.Domains;
using Shopping_Cart.Web.Interfaces;
using Shopping_Cart.Web.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Shopping_Cart.Web.Services
{
    public class UserService : BaseService, IUserService
    {

        public int Register(UserRequest userRequest)
        {
            int ID = 0;

            DataProvider.ExecuteNonQuery(
                "User_Register",
                inputParamMapper: (SqlParameterCollection parms) =>
                {
                    SqlParameter paramId = new SqlParameter();
                    paramId.DbType = System.Data.DbType.Int32;
                    paramId.Direction = System.Data.ParameterDirection.Output;
                    paramId.ParameterName = "@ID";
                    parms.Add(paramId);
                    parms.AddWithValue("@FName", userRequest.FName);
                    parms.AddWithValue("@LName", userRequest.LName);
                    parms.AddWithValue("@Email", userRequest.Email);
                    parms.AddWithValue("@Password", userRequest.Password);
                    parms.AddWithValue("@ConfirmPassword", userRequest.ConfirmPassword);
                },
                returnParameters: (SqlParameterCollection parms) =>
                 {
                     ID = (int)parms["@ID"].Value;
                 });
            return ID;
        }
        public bool Login(LoginRequest loginRequest)
        {
            bool isSuccess = false;

            SelectEmail model = new SelectEmail();
            DataProvider.ExecuteCmd(
                "User_SelectBy_Email",
                inputParamMapper: (SqlParameterCollection parms) =>
                {
                    parms.AddWithValue("@Email", loginRequest.Email);
                },
                singleRecordMapper: (IDataReader reader, short set) =>
                {
                    SelectEmail mapped = Mapper(reader);
                    model = mapped;
                });
            if (model.Email == null)
            {
                return isSuccess;
            }

            if (loginRequest.Password == model.Password)
            {
                isSuccess = true;
            }

            return isSuccess;
        }
        private SelectEmail Mapper(IDataReader reader)
        {
            SelectEmail mapped = new SelectEmail();
            int index = 0;
            mapped.Email = reader.GetString(index++);
            mapped.Password = reader.GetString(index++);

            return mapped;

        }
    }
}