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

		public ActionResult SomeContent(string artist)
		{
			var viewModel = new SomeContentViewModel
			                	{
			                		ArtistName = artist
			                	};
			if (Request.IsAjaxRequest())
			{
				return PartialView(viewModel);
			}

			return View(viewModel);
		}

    }

	public class SomeContentViewModel
	{
		public string ArtistName { get; set; }
	}
}
