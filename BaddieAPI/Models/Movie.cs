using System;
using System.ComponentModel.DataAnnotations;

namespace BaddieAPI.Models
{
    public partial class Movie
    {
        [Key]
        [Required]
        public int MovieId { get; set; }

        public string? Category { get; set; }

        [Required]
        public string? Title { get; set; }

        public int Year { get; set; }

        public string? Director { get; set; }

        public string? Rating { get; set; }

        public string? Edited { get; set; }

        public string? LentTo { get; set; }

        public string? Notes { get; set; }
    }
}
