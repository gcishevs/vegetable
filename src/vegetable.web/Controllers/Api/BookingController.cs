using Microsoft.AspNetCore.Mvc;

namespace vegetable.web.Controllers.Api
{
    [Route("api/[controller]")]
    public class BookingController : Controller
    {
        // GET: api/booking/services
        [HttpGet("services")]
        public ActionResult Get()
        {
            return Ok(new string[] {"mock", "fake", "foo" });
        }
    }
}
