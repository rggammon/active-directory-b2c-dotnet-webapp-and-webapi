using System.Web.Mvc;

namespace TaskWebApp.Controllers
{
    public class BotCanvasController : Controller
    {
        public ActionResult Index(string userid, string username, string s)
        {
            ViewBag.UserId = userid ?? string.Empty;
            ViewBag.UserName = username ?? string.Empty;
            ViewBag.Secret = s;

            return View();
        }

        public ActionResult LivePerson()
        {
            return View();
        }
    }
}