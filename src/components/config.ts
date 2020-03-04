const config: any = {
  port: process.env.PORT || 9000,
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY || 'nodekit',
    algorithm: process.env.JWT_ALGORITHM || 'HS256',
    expiresIn: process.env.JWT_EXPIRES_IN || '30m'
  }
};

export default config;
