using AutoMapper;
using TransferRoom.POC.EPL.SquadApi.Dtos;
using TransferRoom.POC.EPL.SquadApi.Models;

namespace TransferRoom.POC.EPL.SquadApi.Mapping
{

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Team, TeamDto>()
                .ForMember(dest => dest.Nicknames, opt => opt.MapFrom(src => src.Nicknames.Select(n => n.Nickname)));

            CreateMap<Squad, SquadPlayerDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Player.Id))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.Player.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.Player.LastName))
                .ForMember(dest => dest.DateOfBirth, opt => opt.MapFrom(src => src.Player.DateOfBirth != null ? src.Player.DateOfBirth.Value.ToString("yyyy-MM-dd") : null))
                .ForMember(dest => dest.Position, opt => opt.MapFrom(src => src.Player.Position))
                .ForMember(dest => dest.NationalTeam, opt => opt.MapFrom(src => src.Player.NationalTeam))
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Player.PhotoUrl));
        }
    }
}
