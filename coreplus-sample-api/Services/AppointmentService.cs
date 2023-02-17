using Coreplus.Sample.Api.Types;
using System.Globalization;
using System;
using System.Text.Json;

namespace Coreplus.Sample.Api.Services
{
    public record AppointmentGroup (int revenue, int cost,int practitioner_id, int Month, int Year);


    public class AppointmentService
    {
        public async Task<IEnumerable<AppointmentGroup>> GetAllGroup()
        {
            using var fileStream = File.OpenRead(@"./Data/appointments.json");
            var data = await JsonSerializer.DeserializeAsync<Appointment[]>(fileStream);
            if (data == null)
            {
                throw new Exception("Data read error");
            }

            
            var result = data.AsEnumerable()
                    .GroupBy(g => new { g.practitioner_id, Month = ParseDateTime(g.date).Month, Year = ParseDateTime(g.date).Year })
                    .Select(group => new AppointmentGroup(

                        group.Sum(x => x.revenue),
                        group.Sum(x => x.cost),
                        group.Key.practitioner_id,
                        group.Key.Month,
                        group.Key.Year
                    ));

            return (IEnumerable<AppointmentGroup>)result;
            
        }

        public async Task<IEnumerable<AppointmentGroup>> GetGroupById(int prac_id, DateTime DateFrom, DateTime DateTo, bool IsAllDates)
        {
            using var fileStream = File.OpenRead(@"./Data/appointments.json");
            var data = await JsonSerializer.DeserializeAsync<Appointment[]>(fileStream);
            if (data == null)
            {
                throw new Exception("Data read error");
            }

            if (IsAllDates)
            {
                
                var result = data.AsEnumerable()
                      .Where(x => x.practitioner_id == prac_id)
                      .GroupBy(g => new { g.practitioner_id, ParseDateTime(g.date).Month, ParseDateTime(g.date).Year })
                      .Select(group => new AppointmentGroup(

                          group.Sum(x => x.revenue),
                          group.Sum(x => x.cost),
                          group.Key.practitioner_id,
                          group.Key.Month,
                          group.Key.Year
                      ));

                return result;
            }
            else
            {
                var result = data.AsEnumerable()
                      .Where(x => x.practitioner_id == prac_id 
                                        && ParseDateTime(x.date) >= DateFrom && ParseDateTime(x.date) <= DateTo)
                      .GroupBy(g => new { g.practitioner_id, ParseDateTime(g.date).Month, ParseDateTime(g.date).Year })
                      .Select(group => new AppointmentGroup(

                          group.Sum(x => x.revenue),
                          group.Sum(x => x.cost),
                          group.Key.practitioner_id,
                          group.Key.Month,
                          group.Key.Year
                      ));

                return result;
            }
        }


        public async Task<IEnumerable<Appointment>> GetById(int prac_id)
        {

            using var fileStream = File.OpenRead(@"./Data/appointments.json");
            var data = await JsonSerializer.DeserializeAsync<Appointment[]>(fileStream);
            if (data == null)
            {
                throw new Exception("Data read error");
            }


            return data.Where(x => x.practitioner_id == prac_id).Select(prac => prac);

        }

        public static DateTime ParseDateTime(string val) 
        {
            DateTime dateTime;
            if (DateTime.TryParseExact(val, "MM/dd/yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out dateTime))
            {
            }

            return dateTime;
        }
    }
}
