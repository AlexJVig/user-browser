using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class UserController : ControllerBase
  {
    [HttpGet]
    public async Task<List<UserGroup>> GetUsers()
    {
      return await Logic.GetUsers();
    }
  }
}
