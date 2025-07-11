﻿using System.ComponentModel.DataAnnotations;

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
        [Required]
        public string Name { get; set; } = null!;
        /// <summary>
        /// Team logo url.
        /// </summary>
        [Required]
        public string LogoUrl { get; set; } = null!;
        /// <summary>
        /// A collection of team nicknames.
        /// </summary>
        public List<string>? Nicknames { get; set; }
    }
}
