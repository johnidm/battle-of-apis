FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build-env

WORKDIR /app

COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine

WORKDIR /app

COPY --from=build-env /app/out .

ENV ASPNETCORE_HTTP_PORTS=8020
EXPOSE 8020

ENTRYPOINT ["dotnet", "aspnet-core.dll"]
