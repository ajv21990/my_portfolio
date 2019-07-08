using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SmashBrosWebApp
{
    public class SmashHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }


        public void SendMessageToAll(string userName, string message)
        {
            // Broad cast message
            Clients.All.broadcastMessage(userName, message);
        }
    }
}