var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => {
    return new {
        status = "OK",
        hostname = Environment.MachineName,
        application = "aspnet-core"
    };
});

app.Run();
