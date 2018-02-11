using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using vegetable.core.Services;

namespace vegetable.web.Controllers
{
    public class PwsController : Controller
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IHolderData _holderData;

        public PwsController(IHttpContextAccessor httpContextAccessor, IHolderData holderData)
        {
            _httpContextAccessor = httpContextAccessor;
            _holderData = holderData;
        }

        public IActionResult Index()
        {
            string [] segments = _httpContextAccessor?.HttpContext?.Request?.Path.ToString().Split(new char[] { '/' }, StringSplitOptions.RemoveEmptyEntries);

            // We don't support complex paths. Url path should contain only 1 segment = moniker.
            if(segments.Length > 1)
            {
                return RedirectToAction("Index", "Home");
            }

            var model = _holderData.GetHolderData(segments[0]);
                      
            return View(model);
        }
    }
}
