import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import { createUser, findUser } from "../services/user.service";
import { SignUpUserInput__Output } from "../../pb/auth/SignUpUserInput";
import { SignInUserInput__Output } from "../../pb/auth/SignInUserInput";
import customConfig from "../config/default";
import { Role } from "../../pb/auth/Role";
import jwt from "jsonwebtoken";
import { SignUserResponse } from "../../pb/auth/SignUserResponse";

let role: Role | undefined;

export const registerHandler = async (
  req: grpc.ServerUnaryCall<SignUpUserInput__Output, SignUserResponse>,
  res: grpc.sendUnaryData<SignUserResponse>
) => {
  try {
    const hashedPassword = await bcrypt.hash(req.request.password, 12);
    const user = await createUser({
      email: req.request.email.toLowerCase(),
      name: req.request.name,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user.id }, customConfig.JWT_SECRET, {
      expiresIn: "7d",
    });

    res(null, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role!,
      },
      token,
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: "Email already exists",
      });
    }
    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const loginHandler = async (
  req: grpc.ServerUnaryCall<SignInUserInput__Output, SignUserResponse>,
  res: grpc.sendUnaryData<SignUserResponse>
) => {
  try {
    // Get the user from the collection
    const user = await findUser({ email: req.request.email });

    // Check if user exist and password is correct
    if (!user || !(await bcrypt.compare(req.request.password, user.password))) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user.id }, customConfig.JWT_SECRET, {
      expiresIn: "7d",
    });

    res(null, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role!,
      },
      token,
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};
