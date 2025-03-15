module.exports = {
  async getAllEndpoints(ctx) {
    try {
      const routes = strapi.server.router.stack
        .filter((layer) => layer.route)
        .map((layer) => ({
          method: Object.keys(layer.route.methods).map((m) => m.toUpperCase()),
          path: layer.route.path,
        }));

      return ctx.send({ endpoints: routes });
    } catch (error) {
      console.error("Error fetching endpoints:", error);
      return ctx.send({ error: "Unable to fetch endpoints" }, 500);
    }
  },
};
