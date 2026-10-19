using api;
using database;
using db;
using Infra;

var builder = WebApplication.CreateBuilder(args);
var connection_string = builder.Configuration.GetConnectionString("connection_string");
var database = DatabaseConfiguration.Create(connection_string);
DatabaseInitializer.Initialize(database);
builder.Services.AddScoped<LoginController>();
builder.Services.AddScoped<AccountLogic>();
builder.Services.AddScoped<Database>(
    _ => DatabaseConfiguration.Create(connection_string)
);
builder.Services.AddControllers();

var app = builder.Build();



app.Run();