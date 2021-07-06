using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Linq;

namespace server
{
  public class Logic
  {
    public static async Task<List<UserGroup>> GetUsers()
    {
      string filePath = "~/../users.json";
      string text = await File.ReadAllTextAsync(filePath);
      List<User> users = JsonConvert.DeserializeObject<List<User>>(text);
      List<UserGroup> groups = new List<UserGroup>();

      for (int i = 1; i <= 10; i += 3)
      {
        int to = i + 2;

        groups.Add(new UserGroup()
        {
          From = i,
          To = to,
          Users = users.Where(u =>
          {
            if (u.Date.Month >= i && u.Date.Month <= to)
              return true;

            return false;
          }).OrderBy(u => u.Name.Split().Last()).ToList()
        });
      }

      return groups;
    }
  }
}
