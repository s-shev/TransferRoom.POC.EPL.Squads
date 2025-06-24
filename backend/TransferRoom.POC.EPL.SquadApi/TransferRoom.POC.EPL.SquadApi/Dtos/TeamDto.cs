namespace TransferRoom.POC.EPL.SquadApi.Dtos
{
    /// <summary>
    /// Team model
    /// </summary>
    public class TeamDto
    {
        /// <summary>
        /// Team id.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Team name.
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Team logo url.
        /// </summary>
        public string LogoUrl { get; set; }
        /// <summary>
        /// A collection of team nicknames.
        /// </summary>
        public List<string> Nicknames { get; set; }
    }
}
