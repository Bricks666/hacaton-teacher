using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Bloger>>> Get()
        {
            return Ok(await _context.Blogers.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Bloger>> Get(int id)
        {
            var user = await _context.Blogers.FindAsync(id);
            if (user == null)
                return BadRequest("user not found.");
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<Bloger>>> AddUser(Bloger user)
        {
            _context.Blogers.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Blogers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Bloger>>> UpdateUser(Bloger request)
        {
            var dbUser = await _context.Blogers.FindAsync(request.BlogerId);
            if (dbUser == null)
                return BadRequest("Hero not found.");

            dbUser.Username = request.Username;
            dbUser.Name = request.Name;
            dbUser.LastName = request.LastName;
            dbUser.Email = request.Email;

            await _context.SaveChangesAsync();

            return Ok(await _context.Blogers.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Bloger>>> Delete(int id)
        {
            var dbUser = await _context.Blogers.FindAsync(id);
            if (dbUser == null)
                return BadRequest("Hero not found.");

            _context.Blogers.Remove(dbUser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Blogers.ToListAsync());
        }

    }
}