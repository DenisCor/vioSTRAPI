module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '37595d472826097ffcb9b739b4ddfdee'),
  },
});
