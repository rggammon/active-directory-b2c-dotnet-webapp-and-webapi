using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace TaskWebApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //var tenant = ConfigurationManager.AppSettings["ida:Tenant"];
            //var clientId = ConfigurationManager.AppSettings["ida:ClientId"];
            //var clientSecret = ConfigurationManager.AppSettings["ida:ClientSecret"];

            //// The AuthenticationContext is ADAL's primary class, in which you indicate the tenant to use.
            //var authContext = new AuthenticationContext("https://login.microsoftonline.com/" + tenant);

            //// The ClientCredential is where you pass in your client_id and client_secret, which are
            //// provided to Azure AD in order to receive an access_token by using the app's identity.
            //var credential = new ClientCredential(clientId, clientSecret);

            //var result = await authContext.AcquireTokenAsync("https://graph.windows.net", credential);

            //// For B2C user management, be sure to use the 1.6 Graph API version.
            //HttpClient http = new HttpClient();
            //string url = "https://graph.windows.net/" + tenant + "/me?api-version=1.6";

            //// Append the access token for the Graph API to the Authorization header of the request by using the Bearer scheme.
            //HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, url);
            //request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", result.AccessToken);
            //HttpResponseMessage response = await http.SendAsync(request);

            //var content = await response.Content.ReadAsStringAsync();
            //var obj = JObject.Parse(content);

            var principal = ClaimsPrincipal.Current;
            var authenticated = principal?.Identity?.IsAuthenticated ?? false;
            ViewBag.UserName = authenticated ? principal.FindFirst(ClaimTypes.GivenName).Value : string.Empty;
            ViewBag.UserId = authenticated ? principal.FindFirst(ClaimTypes.NameIdentifier).Value : string.Empty;

            return View();
        }

        [Authorize]
        public ActionResult Claims()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Error(string message)
        {
            ViewBag.Message = message;

            return View("Error");
        }
    }
}