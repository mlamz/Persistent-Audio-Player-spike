using System.Web.Mvc;
using PersistentAudioPlayerSpike.ViewModels;

namespace PersistentAudioPlayerSpike.Controllers
{
	public class ArtistController : Controller
	{
		public ActionResult Index(string artist, string artistAAAA)
		{
			var viewModel = new ArtistViewModel
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
}