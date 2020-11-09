module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a84ce29aa9755a3bff6fef997838f87e'),
    },
  },
});
