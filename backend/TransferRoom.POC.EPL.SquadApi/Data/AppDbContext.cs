using Microsoft.EntityFrameworkCore;
using TransferRoom.POC.EPL.SquadApi.Models;

namespace TransferRoom.POC.EPL.SquadApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Team> Teams => Set<Team>();
        public DbSet<TeamNickname> Nicknames => Set<TeamNickname>();
        public DbSet<Player> Players => Set<Player>();
        public DbSet<Squad> Squads => Set<Squad>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Squad>()
                .HasKey(s => new { s.TeamId, s.PlayerId });

            modelBuilder.Entity<Squad>()
                .HasOne(s => s.Team)
                .WithMany(t => t.Squads)
                .HasForeignKey(s => s.TeamId);

            modelBuilder.Entity<Squad>()
                .HasOne(s => s.Player)
                .WithMany(p => p.Squads)
                .HasForeignKey(s => s.PlayerId);

            modelBuilder.Entity<TeamNickname>()
                .HasKey(s => new { s.TeamId, s.Nickname });

            modelBuilder.Entity<TeamNickname>()
                .HasOne(s => s.Team)
                .WithMany(t => t.Nicknames)
                .HasForeignKey(s => s.TeamId);
        }
    }
}
