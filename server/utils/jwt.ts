import jwt, { SignOptions } from 'jsonwebtoken';
import customConfig from '../config/default';

export const signJwt = (
  payload: Object,
  key: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
  options: SignOptions = {}
) => {
  const privateKey = Buffer.from(customConfig[key], 'base64').toString('ascii');
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
  });
};

export const verifyJwt = <T>(
  token: string,
  key: 'accessTokenPublicKey' | 'refreshTokenPublicKey'
): T | null => {
  try {
    const publicKey = Buffer.from(customConfig[key], 'base64').toString(
      'ascii'
    );
    return jwt.verify(token, publicKey) as T;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// import jwt, { SignOptions } from "jsonwebtoken";
// import customConfig from "../config/default";

// type KeyType =
//   | "accessTokenPrivateKey"
//   | "refreshTokenPrivateKey"
//   | "accessTokenPublicKey"
//   | "refreshTokenPublicKey";

// interface JwtPayload {
//   userId: string;
//   roles: string[];
// }

// export const signJwt = (
//   payload: JwtPayload,
//   key: KeyType,
//   options: SignOptions = {}
// ): string => {
//   const privateKey = Buffer.from(customConfig[key], "base64").toString("ascii");
//   return jwt.sign(payload, privateKey, {
//     ...options,
//     algorithm: "RS256",
//   });
// };

// export const verifyJwt = <T extends object>(
//   token: string,
//   key: KeyType
// ): T | null => {
//   try {
//     const publicKey = Buffer.from(customConfig[key], "base64").toString(
//       "ascii"
//     );
//     return jwt.verify(token, publicKey) as T;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
