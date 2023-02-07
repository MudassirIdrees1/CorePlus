using Coreplus.Sample.Api.Endpoints;
using Coreplus.Sample.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<PractitionerService>();
builder.Services.AddSingleton<AppointmentService>();

var app = builder.Build();

//var practitionerEndpoints = app.MapGroup("/practitioners");
var practitionerEndpoints = app.MapGroup("/");
practitionerEndpoints.MapPractitionerEndpoints();

app.Run();
