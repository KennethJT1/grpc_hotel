import * as grpc from "@grpc/grpc-js";
import { findAllUsers } from "../services/user.service";
import { GetUsersRequest__Output } from "../../pb/auth/GetUsersRequest";
import { User } from "../../pb/auth/User";

export const findAllUsersHandler = async (
  call: grpc.ServerWritableStream<GetUsersRequest__Output, User>
) => {
  try {
    const { page, limit } = call.request;
    const users = await findAllUsers({
      page: parseInt(page),
      limit: parseInt(limit),
    });

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      call.write({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role!,
      });
    }
    call.end();
  } catch (error: any) {
    console.log(error);
  }
};
