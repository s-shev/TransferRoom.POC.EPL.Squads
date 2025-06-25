namespace TransferRoom.POC.EPL.SquadApi.Models
{
    public class Squad
    {
        public int TeamId { get; set; }
        public int PlayerId { get; set; }
        public int? ShirtNumber { get; set; }

        public Team Team { get; set; } = null!;
        public Player Player { get; set; } = null!;
    }
}
