# Use the official .NET SDK image for building
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and projects
COPY TransferRoom.POC.EPL.SquadApi.sln ./
COPY TransferRoom.POC.EPL.SquadApi ./TransferRoom.POC.EPL.SquadApi

# Restore and build
RUN dotnet restore
RUN dotnet publish ./TransferRoom.POC.EPL.SquadApi -c Release -o /app/publish

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "TransferRoom.POC.EPL.SquadApi.dll"]
