namespace TransferRoom.POC.EPL.SquadApi.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string LogoUrl { get; set; } = null!;

        public ICollection<TeamNickname> Nicknames { get; set; } = new List<TeamNickname>();
        public ICollection<Squad> Squads { get; set; } = new List<Squad>();
    }
}
