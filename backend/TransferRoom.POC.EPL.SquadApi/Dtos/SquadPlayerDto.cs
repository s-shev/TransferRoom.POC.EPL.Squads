using System.ComponentModel.DataAnnotations;

namespace TransferRoom.POC.EPL.SquadApi.Dtos
{
    /// <summary>
    /// Squad player model
    /// </summary>
    public class SquadPlayerDto
    {
        /// <summary>
        /// Player id.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// First name.
        /// </summary>
        [Required(AllowEmptyStrings = true)]
        public string FirstName { get; set; } = null!;
        /// <summary>
        /// Last name
        /// </summary>
        [Required(AllowEmptyStrings = true)] 
        public string LastName { get; set; } = null!;
        /// <summary>
        /// Date of birth (if known)
        /// </summary>
        public string? DateOfBirth { get; set; }
        /// <summary>
        /// Position: G - Goalkeeper, D - defender, M - Midfielder, F - Forward
        /// </summary>
        [Required] 
        public string Position { get; set; } = null!;
        /// <summary>
        /// National team.
        /// </summary>
        [Required(AllowEmptyStrings = true)]
        public string NationalTeam { get; set; } = null!;
        /// <summary>
        /// Player photo url.
        /// </summary>
        [Required] 
        public string PhotoUrl { get; set; } = null!;
        /// <summary>
        /// Player shirt number
        /// </summary>
        public int? ShirtNumber { get; set; }
    }
}
