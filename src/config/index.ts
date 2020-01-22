export default {
  port: process.env.PORT || 7000,
  jwt: {
    secretKey: process.env.SECRET_KEY || 'node_boilerplate',
    algorithm: process.env.ALGORITHM || 'HS256',
    expiresIn: process.env.EXPIRES_IN || '30m'
  }
};
