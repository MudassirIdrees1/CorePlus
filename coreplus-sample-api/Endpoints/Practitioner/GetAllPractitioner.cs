using Coreplus.Sample.Api.Services;

namespace Coreplus.Sample.Api.Endpoints.Practitioner;

public static class GetAllPractitioner
{
    public static RouteGroupBuilder MapGetAllPractitioners(this RouteGroupBuilder group)
    {
        group.MapGet("/Practitioner", async (PractitionerService practitionerService) =>
        {
            var practitioners = await practitionerService.GetPractitioners();
            return Results.Ok(practitioners);
        });

        return group;
    }
}