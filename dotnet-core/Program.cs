var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => {
    return new {
        status = "OK",
        hostname = Environment.MachineName,
        application = "dotnet-core"
    };
});

app.Run();
