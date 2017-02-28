using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vegetable.core.Entities;
using vegetable.core.Data;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace vegetable.admin.Controllers.Api
{
    [Route("api/[controller]")]
    public class HolderController : Controller
    {
        private readonly IHolderDataProvider _holderRepository;
        private readonly ILogger<HolderController> _logger;

        public HolderController(IHolderDataProvider holderRepository, ILogger<HolderController> logger)
        {
            _holderRepository = holderRepository;
            _logger = logger;
        }

        // GET: api/values
        [HttpGet]
        public JsonResult Get()
        {
            //We need to get actual holder

            var holder = _holderRepository.GetHolder("mock2");
            var result = Json(holder);
            return Json(holder);
        }

        [HttpPost]
        public void Save([FromBody]Holder holder)
        {
            //We need to get actual holder
            try
            {
                _holderRepository.UpdateHolder(holder);
            }
            catch
            {
                //Need add the log

            }
        }
    }
}
