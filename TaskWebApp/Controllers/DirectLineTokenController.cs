using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace TaskWebApp.Controllers
{
    public class DirectLineTokenController : Controller
    {
        public async Task<ActionResult> Index()
        {
            var localhostContent = new StringContent(JsonConvert.SerializeObject(new
            {
                TrustedOrigins = new JArray() { Request.Url.GetLeftPart(UriPartial.Authority) }
            }), Encoding.UTF8, "application/json");

            return Json(new
            {
                localhostToken = await GetDirectLineToken(localhostContent),
                webchatToken = await GetDirectLineToken(),
            }, JsonRequestBehavior.AllowGet);
        }

        private async Task<string> GetDirectLineToken(HttpContent content = null)
        {
            using (var httpClient = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Post, "https://directline.botframework.com/v3/directline/tokens/generate");
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "Z3wAoplUVIU.cwA.kvQ.BT_hytQNELPyS-2CAoCQXjtuqdZ63Mc32VmgFhk-RRA");
                request.Content = content ?? request.Content;
                var response = await httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();
                var result = JObject.Parse(await response.Content.ReadAsStringAsync());
                return result["token"].Value<string>();
            }
        }
    }
}