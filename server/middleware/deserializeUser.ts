import { User } from '@prisma/client';
import { findUniqueUser } from '../services/user.service';
import redisClient from '../utils/connectRedis';
import { verifyJwt } from '../utils/jwt';

export const deserializeUser = async (
  access_token: string
): Promise<User | null> => {
  try {
    // Get the token
    if (!access_token) {
      return null;
    }

    // Validate Access Token
    const decoded = verifyJwt<{ sub: string }>(
      access_token,
      'accessTokenPublicKey'
    );

    if (!decoded) {
      return null;
    }

    // Check if user has a valid session
    const session = await redisClient.get(decoded.sub);

    if (!session) {
      return null;
    }

    // Check if user still exist
    const user = await findUniqueUser({ id: JSON.parse(session).id });

    if (!user) {
      return null;
    }

    return user;
  } catch (err: any) {
    return null;
  }
};

/*import grpc from 'grpc';
import { Metadata } from '@grpc/grpc-js';

// Define a middleware function that checks if the user has the necessary permissions
const checkAuthMiddleware = (call: grpc.ServerUnaryCall<any>, callback: grpc.sendUnaryData<any>, next: () => void) => {
  // Get the user's token from the request metadata
  const metadata = (call as any).metadata.getMap();
  const token = metadata['authorization'];

  // TODO: Implement your authorization logic here

  if (token !== 'my-secret-token') {
    // If the user does not have the necessary permissions, return an error
    const error = new Error('Unauthorized');
    (error as any).code = grpc.status.UNAUTHENTICATED;
    return callback(error);
  }

  // If the user has the necessary permissions, call the next middleware function
  next();
};

// Define your gRPC service with a protected route
const myService = {
  // Define your unprotected route
  unprotectedRoute: (call: grpc.ServerUnaryCall<any>, callback: grpc.sendUnaryData<any>) => {
    callback(null, { message: 'This route is unprotected' });
  },

  // Define your protected route and add the middleware function as a parameter
  protectedRoute: [checkAuthMiddleware, (call: grpc.ServerUnaryCall<any>, callback: grpc.sendUnaryData<any>) => {
    callback(null, { message: 'This route is protected' });
  }]
};

// Create your gRPC server and add your service to it
const server = new grpc.Server();
server.addService(myService, {});
server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('Server running at http://localhost:50051');
});
*/