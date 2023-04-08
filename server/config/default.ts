import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const customConfig: {
  port: number;
  dbUri: string;
  host: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
  accessTokenPrivateKey: string;
  accessTokenPublicKey: string;
  refreshTokenPrivateKey: string;
  refreshTokenPublicKey: string;
  redisCacheExpiresIn: number;
  CLIENT_PORT: string
} = {
  // port: process.env.SEREVER_PORT as string,
  port:8900,
  accessTokenExpiresIn: 15,
  refreshTokenExpiresIn: 60,
  redisCacheExpiresIn: 60,

  dbUri: process.env.DATABASE_URL as string,
  CLIENT_PORT: process.env.CLIENT_PORT as string,
  host: process.env.HOST as string,
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
  refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
  refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
};

export default customConfig;
