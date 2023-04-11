import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });


const customConfig: {
  port: number;
  dbUri: string;
  host: string;
  JWT_SECRET: string;
  JWT_METADATA_KEY: string;
  CLIENT_PORT: number;
} = {
  port: process.env.SERVER_PORT as unknown as number,
  CLIENT_PORT: process.env.CLIENT_PORT as unknown as number,
  dbUri: process.env.DATABASE_URL as string,
  host: process.env.HOST as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  JWT_METADATA_KEY: process.env.JWT_METADATA_KEY as string,
};

export default customConfig;
