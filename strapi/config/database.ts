export default ({ env }) => ({
  connection: {
    client: 'convex',
    connector: 'convex',
    settings: {
      convexUrl: env('CONVEX_URL'),
      deploymentUrl: env('CONVEX_DEPLOYMENT_URL'),
    },
    options: {
      // Any additional Convex-specific options
      useNullAsDefault: true,
    },
  },
});
