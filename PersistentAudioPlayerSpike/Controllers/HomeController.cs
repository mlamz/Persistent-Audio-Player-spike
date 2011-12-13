using System.Web.Mvc;

namespace PersistentAudioPlayerSpike.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
			if (Request.IsAjaxRequest())
			{
				return PartialView();
			}

			return View();
        }

		public ActionResult AnotherPage()
		{
			return View();
		}
    }

	
}
