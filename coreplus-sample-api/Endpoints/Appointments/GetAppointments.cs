using Coreplus.Sample.Api.Services;

namespace Coreplus.Sample.Api.Endpoints.Appointments;


public static class GetAppointments
{

    public static RouteGroupBuilder MapAllGroup(this RouteGroupBuilder group)
    {
        group.MapGet("/GetAllGroup/", async (AppointmentService srv) =>
        {
            var result = await srv.GetAllGroup();
            return Results.Ok(result);
        });

        return group;
    }

    public static RouteGroupBuilder MapGroupById(this RouteGroupBuilder group)
    {
        group.MapGet("/GetGroupById/{id}/{FromDate}/{ToDate}/{IsAll}", async (AppointmentService srv, 
                                            int id, DateTime FromDate, DateTime ToDate, bool IsAll) =>
        {
            var result = await srv.GetGroupById(id, FromDate, ToDate, IsAll);
            return Results.Ok(result);
        });

        return group;
    }

    public static RouteGroupBuilder MapGetById(this RouteGroupBuilder group)
    {
        group.MapGet("/GetByID/{id}", async (AppointmentService srv, int id) =>
        {
            var result = await srv.GetById(id);
            return Results.Ok(result);
        });

        return group;
    }


}