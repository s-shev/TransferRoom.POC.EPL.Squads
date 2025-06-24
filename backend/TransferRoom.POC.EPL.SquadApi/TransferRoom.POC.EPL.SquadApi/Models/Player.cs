namespace TransferRoom.POC.EPL.SquadApi.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public DateTime? DateOfBirth { get; set; }
        public string Position { get; set; } = null!;
        public string NationalTeam { get; set; } = null!;
        public string PhotoUrl { get; set; } = null!;

        public ICollection<Squad> Squads { get; set; } = new List<Squad>();
    }
}
