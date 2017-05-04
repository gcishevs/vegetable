using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace vegetable.web.Controllers.Api
{
    [Route("api/[controller]")]
    public class BookingController : Controller
    {
        // GET: api/booking/services
        [HttpGet("services")]
        public ActionResult GetServices()
        {
            return Ok(new string[] {"mock", "fake", "foo" });
        }

        // GET: api/booking/timeAvailabilty
        [HttpGet("timeAvailabilty")]
        public ActionResult GetTimeAvailability(string service, string year, string month)
        {
            return Ok(new Dictionary<string, TimeResult>{
                { "1", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "2", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "3", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "4", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "5", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "6", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "6.15-17.00" } } },
                { "7", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "8", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "9", new TimeResult() {count = "6", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "10", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "11", new TimeResult() {count = "10", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "11.15-17.00" } } },
                { "12", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "12.15-17.00" } } },
                { "13", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "14", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "14.15-17.00" } } },
                { "15", new TimeResult() {count = "10", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "16", new TimeResult() {count = "15", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "16.15-17.00" } } },
                { "17", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "17.15-17.00" } } },
                { "18", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "18.15-17.00" } } },
                { "19", new TimeResult() {count = "7", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "19.15-17.00" } } },
                { "20", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "20.15-17.00" } } },
                { "21", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "21.15-17.00" } } },
                { "22", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "22.15-17.00" } } },
                { "23", new TimeResult() {count = "13", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "24", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "25", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "26", new TimeResult() {count = "4", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "27", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "28", new TimeResult() {count = "5", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "29", new TimeResult() {count = "13", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "30", new TimeResult() {count = "13", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
                { "31", new TimeResult() {count = "13", availableTime = new string[] {"8.00-8.30", "9.00-9.39", "10.15-11.00", "15.15-17.00" } } },
            });
        }
    }

    public class TimeResult
    {
        public string count;

        public string[] availableTime;
    }
}
