using be;
using Infra;
using Microsoft.AspNetCore.Mvc;

namespace api;

public class LoginController: ControllerBase
{
    private AccountLogic accountLogic;
    public LoginController(AccountLogic accountLogic)
    {
        this.accountLogic = accountLogic;
    }

    [HttpPost(nameof(register))]
    public User register([FromForm] User user)
    {
        this.accountLogic.register(user);
        return null;
    }
}