import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _auth_AuthServiceClient, AuthServiceDefinition as _auth_AuthServiceDefinition } from './auth/AuthService';
import type { HotelServiceClient as _auth_HotelServiceClient, HotelServiceDefinition as _auth_HotelServiceDefinition } from './auth/HotelService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _auth_AuthServiceClient> & { service: _auth_AuthServiceDefinition }
    GetHotelsRequest: MessageTypeDefinition
    GetUsersRequest: MessageTypeDefinition
    HotelRequest: MessageTypeDefinition
    HotelService: SubtypeConstructor<typeof grpc.Client, _auth_HotelServiceClient> & { service: _auth_HotelServiceDefinition }
    Role: EnumTypeDefinition
    SignInUserInput: MessageTypeDefinition
    SignUpUserInput: MessageTypeDefinition
    SignUserResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserRequest: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  hotel: {
    CreateHotelRequest: MessageTypeDefinition
    Hotel: MessageTypeDefinition
    HotelResponse: MessageTypeDefinition
  }
}

