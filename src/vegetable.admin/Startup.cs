using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using vegetable.core.Data;
using Microsoft.Extensions.Configuration;
using vegetable.core.Logging;

namespace vegetable.admin
{
    public class Startup
    {

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            services.AddDirectoryBrowser();

            var connectionString = Configuration["Database:Connection"];

            // IoC
            services.AddScoped<ILogRepository>(h => new SqlLogDataRepository(connectionString));
            services.AddSingleton<IHolderDataProvider>(h => new SqlHolderDataProvider(connectionString, new SqlLogDataRepository(connectionString)));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, ILogRepository logRepo)
        {
            loggerFactory.AddProvider(new LoggerDbProvider(logRepo));

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
            app.UseStaticFiles();


            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=index}/{id?}");

                routes.MapSpaFallbackRoute(
                   name: "spa-fallback",
                   defaults: new { controller = "Pws", action = "Index" });
            });
        }
    }
}
