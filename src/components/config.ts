const config: any = {
  port: process.env.PORT || 7000,
  postgresql: {
    host:
      process.env.POSTGRESQL_HOST ||
      'ec2-174-129-33-139.compute-1.amazonaws.com',
    port: process.env.POSTGRESQL_PORT || 5432,
    username: process.env.POSTGRESQL_USERNAME || 'ofxijmmwyhmveh',
    password:
      process.env.POSTGRESQL_PASSWORD ||
      '8f14d081b3c01259a61f0b5eb606d28b726e2c959967483a1e0b2198e5ad467e',
    database: process.env.POSTGRESQL_DATABASE || 'd944eiog9a5a8j'
  },
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY || 'nodekit',
    algorithm: process.env.JWT_ALGORITHM || 'HS256',
    expiresIn: process.env.JWT_EXPIRES_IN || '30m'
  }
};

export default config;
