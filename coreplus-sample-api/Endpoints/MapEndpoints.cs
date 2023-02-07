using Coreplus.Sample.Api.Endpoints.Appointments;
using Coreplus.Sample.Api.Endpoints.Practitioner;

namespace Coreplus.Sample.Api.Endpoints;

public static class MapEndpoints
{
    public static RouteGroupBuilder MapPractitionerEndpoints(this RouteGroupBuilder group)
    {
        //Practitioners
        group.MapGetAllPractitioners();
        group.MapGetSupervisorPractitioners();
        group.MapGetBelowSupervisorPractitioners();

        //Appointments
        group.MapAllGroup();
        group.MapGroupById();
        group.MapGetById();

        return group;
    }
}