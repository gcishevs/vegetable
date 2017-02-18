using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using vegetable.core.Data;
using vegetable.core.Services;

namespace vegetable.web
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
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            // Allow to access the current HTTP context in a safe way 
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();


            var connectionString = Configuration["Database:Connection"];
            // IoC
            services.AddSingleton<IHolderDataProvider>(h =>
            {
                var useElastic = false;
                bool.TryParse(Configuration["ElasticSearch:UseElastic"], out useElastic);

                if (useElastic)
                {
                    return new SqlHolderDataProvider(Configuration["Database:Connection"]);
                }
                else
                {
                    return new ElasticSearchHolderDataProvider(Configuration["ElasticSearch:ElasticSearchUri"], Configuration["ElasticSearch:ElasticSearchIndex"]);
                }
            });

            services.AddSingleton<IHolderData, HolderData>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                   name: "spa-fallback",
                   defaults: new { controller = "Pws", action = "Index" });
            });
        }
    }
}
