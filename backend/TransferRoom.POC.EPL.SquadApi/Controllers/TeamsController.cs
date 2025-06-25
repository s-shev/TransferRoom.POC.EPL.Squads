using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TransferRoom.POC.EPL.SquadApi.Data;
using TransferRoom.POC.EPL.SquadApi.Dtos;

namespace TransferRoom.POC.EPL.SquadApi.Controllers
{

    [ApiController]
    [Route("api/teams")]
    public class TeamsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public TeamsController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves all teams, optionally filtered by name or nickname.
        /// </summary>
        /// <param name="search">Optional search string to filter teams by name or nickname.</param>
        /// <returns>List of teams.</returns>
        /// <response code="200">Returns the list of teams.</response>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamDto>>> GetAllTeams([FromQuery] string? search)
        {
            var query = _context.Teams
                .Include(t => t.Nicknames)
                .AsQueryable();

            if (!string.IsNullOrWhiteSpace(search))
            {
                var lowerSearch = search.ToLower();
                query = query.Where(t =>
                    t.Name.ToLower().Contains(lowerSearch) ||
                    t.Nicknames.Any(n => n.Nickname.ToLower().Contains(lowerSearch)));
            }

            var teams = await query.ToListAsync();
            var teamsDto = _mapper.Map<List<TeamDto>>(teams);

            return Ok(teamsDto);
        }

        /// <summary>
        /// Retrieves a single team by its Id.
        /// </summary>
        /// <param name="id">Team Id.</param>
        /// <returns>The team if found.</returns>
        /// <response code="200">Returns the requested team.</response>
        /// <response code="404">If the team is not found.</response>
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamDto>> GetTeamById(int id)
        {
            var team = await _context.Teams
                .Include(t => t.Nicknames)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (team == null)
                return NotFound();

            var teamDto = _mapper.Map<TeamDto>(team);
            return Ok(teamDto);
        }

        /// <summary>
        /// Retrieves the squad for a given team.
        /// </summary>
        /// <param name="id">Team ID.</param>
        /// <returns>List of squad players.</returns>
        /// <response code="200">Returns the team squad.</response>
        /// <response code="404">If no squad exists for the team.</response>
        [HttpGet("{id}/squad")]
        public async Task<ActionResult<IEnumerable<SquadPlayerDto>>> GetTeamSquad(int id)
        {
            var squad = await _context.Squads
                .Where(s => s.TeamId == id)
                .Include(s => s.Player)
                .ToListAsync();

            if (!squad.Any())
                return NotFound();

            var result = _mapper.Map<IEnumerable<SquadPlayerDto>>(squad);
            return Ok(result);
        }
    }
}