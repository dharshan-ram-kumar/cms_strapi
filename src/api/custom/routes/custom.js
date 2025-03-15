module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-endpoints",
      handler: "custom.getAllEndpoints",
      config: {
        auth: false,
      },
    },
  ],
};
