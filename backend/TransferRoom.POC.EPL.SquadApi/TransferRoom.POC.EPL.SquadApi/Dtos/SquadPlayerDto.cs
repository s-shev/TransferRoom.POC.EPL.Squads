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
        public string FirstName { get; set; }
        /// <summary>
        /// Last name
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// Date of birth (if known)
        /// </summary>
        public string? DateOfBirth { get; set; }
        /// <summary>
        /// Position: G - Goalkeeper, D - defender, M - Midfielder, F - Forward
        /// </summary>
        public string Position { get; set; }
        /// <summary>
        /// National team.
        /// </summary>
        public string NationalTeam { get; set; }
        /// <summary>
        /// Player photo url.
        /// </summary>
        public string PhotoUrl { get; set; }
        /// <summary>
        /// Player shirt number
        /// </summary>
        public int? ShirtNumber { get; set; }
    }
}
