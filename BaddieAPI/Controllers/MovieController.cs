using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaddieAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BaddieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class MovieController : Controller
    {
        private MovieDBContext context;

        // controller
        public MovieController(MovieDBContext temp) {
            context = temp;
        }
         
        // GET: /<controller>/
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.
                Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();

            return x;
        }

        //Post method
        //public void Post(MarriottFood m)
        //{

        //}
    }
}

