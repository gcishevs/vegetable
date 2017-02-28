using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace vegetable.admin.Controllers.Api
{
    public class DataToolsController : Controller
    {
        [Route("/api/AvailableTags")]
        [HttpGet]
        public JsonResult GetAvailableTags()
        {
            var people = new List<string>()
            {
                "Assistant Caretaker", "Assistant Cook", "Assistant Manager", "Assistant Nurse", "Assistant Teacher", "Astrologer"
            };

            return Json(people);
        }
    }
}
