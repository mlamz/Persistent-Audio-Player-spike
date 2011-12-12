using System.Web.Mvc;

namespace PersistentAudioPlayerSpike.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

		public ActionResult AnotherPage()
		{
			return View();
		}
    }

	
}
