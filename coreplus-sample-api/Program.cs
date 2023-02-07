using Coreplus.Sample.Api.Endpoints;
using Coreplus.Sample.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
ConfigureServices(builder.Services);

builder.Services.AddSingleton<PractitionerService>();
builder.Services.AddSingleton<AppointmentService>();

var app = builder.Build();

//var practitionerEndpoints = app.MapGroup("/practitioners");
var practitionerEndpoints = app.MapGroup("/");
practitionerEndpoints.MapPractitionerEndpoints();


app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.Run();


void ConfigureServices(IServiceCollection services) 
{
    #region CORS
    services.AddCors(options =>
    {
        options.AddPolicy("CorsPolicy",
            builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            //.AllowCredentials()
            );
    });
    #endregion
}