using Microsoft.AspNetCore.Mvc;
using ajaxPartial.Models;
using System;

namespace ajaxPartial.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GetStage(string stageId)
        {
            Stage newStage = new Stage() { Id = Convert.ToInt32(stageId) };
            return PartialView("Massege", newStage);
        }
    }
}
