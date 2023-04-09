import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../pb/services';
import { AuthServiceHandlers } from '../pb/auth/AuthService';
import {
  loginHandler,
  refreshAccessTokenHandler,
  registerHandler,
} from './controllers/auth.controller';
import customConfig from './config/default';
import connectDB from './database/prisma';
import { getMeHandler } from './controllers/user.controller';
import {
  UpdateHotelHandler,
  createHotelHandler,
  deleteHotelHandler,
  findAllHotelsHandler,
  findHotelHandler,
} from "./controllers/hotel.controller";
import { HotelServiceHandlers } from "../pb/auth/HotelService";

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PORT = customConfig.port;
const PROTO_FILE = "../proto/services.proto";
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const authPackage = proto.auth;

const server = new grpc.Server();

//User service
server.addService(authPackage.AuthService.service, {
  SignUpUser: (req, res) => registerHandler(req, res),
  SignInUser: (req, res) => loginHandler(req, res),
  RefreshToken: (req, res) => refreshAccessTokenHandler(req, res),
  GetMe: (req, res) => getMeHandler(req, res),
} as AuthServiceHandlers);

//Hotel service
server.addService(authPackage.HotelService.service, {
  CreateHotel: (req, res) => createHotelHandler(req, res),
  UpdateHotel: (req, res) => UpdateHotelHandler(req, res),
  DeleteHotel: (req, res) => deleteHotelHandler(req, res),
  GetHotel: (req, res) => findHotelHandler(req, res),
  GetHotels: (call) => findAllHotelsHandler(call),
} as HotelServiceHandlers);


server.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    server.start();
    connectDB();
    console.log(`🚀 Server listening on ${port}`);
  }
);
