using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly DataContext _context;

        public BlogController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<BlogUser>>> Get()
        {
            return Ok(await _context.Bloger.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BlogUser>> Get(int id)
        {
            var hero = await _context.Bloger.FindAsync(id);
            if (hero == null)
                return BadRequest("Hero not found.");
            return Ok(hero);
        }

        [HttpPost]
        public async Task<ActionResult<List<BlogUser>>> AddHero(BlogUser hero)
        {
            _context.Bloger.Add(hero);
            await _context.SaveChangesAsync();

            return Ok(await _context.Bloger.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<BlogUser>>> UpdateHero(BlogUser request)
        {
            var dbHero = await _context.Bloger.FindAsync(request.Id);
            if (dbHero == null)
                return BadRequest("Hero not found.");

            dbHero.Name = request.Name;
            dbHero.FirstName = request.FirstName;
            dbHero.LastName = request.LastName;
            dbHero.Place = request.Place;

            await _context.SaveChangesAsync();

            return Ok(await _context.Bloger.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<BlogUser>>> Delete(int id)
        {
            var dbHero = await _context.Bloger.FindAsync(id);
            if (dbHero == null)
                return BadRequest("Hero not found.");

            _context.Bloger.Remove(dbHero);
            await _context.SaveChangesAsync();

            return Ok(await _context.Bloger.ToListAsync());
        }

    }
}
