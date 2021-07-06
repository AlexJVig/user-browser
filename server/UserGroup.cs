using System.Collections.Generic;
using Newtonsoft.Json;

namespace server
{
  public class UserGroup
  {
    [JsonProperty("from")]
    public int From { get; set; }

    [JsonProperty("to")]
    public int To { get; set; }

    [JsonProperty("users")]
    public List<User> Users { get; set; }
  }
}
