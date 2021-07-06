using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace server
{
  public class Logic
  {
    public static async Task<List<UserGroup>> GetUsers()
    {
      string filePath = "~/../users.json";
      string text = await File.ReadAllTextAsync(filePath);

      List<User> users = JsonConvert.DeserializeObject<List<User>>(text);

      return null; //Task.FromResult<List<UserGroup>>(users);
    }
  }
}
