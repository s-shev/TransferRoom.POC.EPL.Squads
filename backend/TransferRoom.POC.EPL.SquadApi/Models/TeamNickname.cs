namespace TransferRoom.POC.EPL.SquadApi.Models
{
    public class TeamNickname
    {
        public int TeamId { get; set; }
        public string Nickname { get; set; } = null!;

        public Team Team { get; set; } = null!;
    }
}
