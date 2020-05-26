const config = {
  port: process.env.PORT || 9000,
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY || 'd73dhwybb',
    algorithm: process.env.JWT_ALGORITHM || 'HS256',
    expiresIn: process.env.JWT_EXPIRES_IN || '30m',
  },
};

export default config;
