using System;
using Newtonsoft.Json;

namespace server
{
  public class User
  {
    [JsonProperty("id")]
    public string Id { get; set; }

    [JsonProperty("date")]
    public DateTime Date { get; set; }

    [JsonProperty("age")]
    public int Age { get; set; }

    [JsonProperty("name")]
    public string Name { get; set; }

    [JsonProperty("address")]
    public string Address { get; set; }
  }
}
