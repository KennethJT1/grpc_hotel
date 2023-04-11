// Original file: proto/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetUsersRequest as _auth_GetUsersRequest, GetUsersRequest__Output as _auth_GetUsersRequest__Output } from '../auth/GetUsersRequest';
import type { SignInUserInput as _auth_SignInUserInput, SignInUserInput__Output as _auth_SignInUserInput__Output } from '../auth/SignInUserInput';
import type { SignUpUserInput as _auth_SignUpUserInput, SignUpUserInput__Output as _auth_SignUpUserInput__Output } from '../auth/SignUpUserInput';
import type { SignUserResponse as _auth_SignUserResponse, SignUserResponse__Output as _auth_SignUserResponse__Output } from '../auth/SignUserResponse';
import type { User as _auth_User, User__Output as _auth_User__Output } from '../auth/User';

export interface AuthServiceClient extends grpc.Client {
  GetUsers(argument: _auth_GetUsersRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_auth_User__Output>;
  GetUsers(argument: _auth_GetUsersRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_auth_User__Output>;
  getUsers(argument: _auth_GetUsersRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_auth_User__Output>;
  getUsers(argument: _auth_GetUsersRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_auth_User__Output>;
  
  SignInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_SignUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUsers: grpc.handleServerStreamingCall<_auth_GetUsersRequest__Output, _auth_User>;
  
  SignInUser: grpc.handleUnaryCall<_auth_SignInUserInput__Output, _auth_SignUserResponse>;
  
  SignUpUser: grpc.handleUnaryCall<_auth_SignUpUserInput__Output, _auth_SignUserResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GetUsers: MethodDefinition<_auth_GetUsersRequest, _auth_User, _auth_GetUsersRequest__Output, _auth_User__Output>
  SignInUser: MethodDefinition<_auth_SignInUserInput, _auth_SignUserResponse, _auth_SignInUserInput__Output, _auth_SignUserResponse__Output>
  SignUpUser: MethodDefinition<_auth_SignUpUserInput, _auth_SignUserResponse, _auth_SignUpUserInput__Output, _auth_SignUserResponse__Output>
}
