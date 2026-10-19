namespace be;

public class User
{
    public int id { get; set; }
    public string username { get; set; }
    public string password { get; set; }
    public Role role { get; set; }

    public User()
    {
        
    }
    
    public User(int id, string username, string password, Role role)
    {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
