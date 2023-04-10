// Original file: proto/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateHotelRequest as _hotel_CreateHotelRequest, CreateHotelRequest__Output as _hotel_CreateHotelRequest__Output } from '../hotel/CreateHotelRequest';
import type { DeleteHotelResponse as _auth_DeleteHotelResponse, DeleteHotelResponse__Output as _auth_DeleteHotelResponse__Output } from '../auth/DeleteHotelResponse';
import type { FindHotelsByLocationRequest as _auth_FindHotelsByLocationRequest, FindHotelsByLocationRequest__Output as _auth_FindHotelsByLocationRequest__Output } from '../auth/FindHotelsByLocationRequest';
import type { GetHotelsRequest as _auth_GetHotelsRequest, GetHotelsRequest__Output as _auth_GetHotelsRequest__Output } from '../auth/GetHotelsRequest';
import type { Hotel as _hotel_Hotel, Hotel__Output as _hotel_Hotel__Output } from '../hotel/Hotel';
import type { HotelRequest as _auth_HotelRequest, HotelRequest__Output as _auth_HotelRequest__Output } from '../auth/HotelRequest';
import type { HotelResponse as _hotel_HotelResponse, HotelResponse__Output as _hotel_HotelResponse__Output } from '../hotel/HotelResponse';
import type { UpdateHotelRequest as _hotel_UpdateHotelRequest, UpdateHotelRequest__Output as _hotel_UpdateHotelRequest__Output } from '../hotel/UpdateHotelRequest';

export interface HotelServiceClient extends grpc.Client {
  CreateHotel(argument: _hotel_CreateHotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  CreateHotel(argument: _hotel_CreateHotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  CreateHotel(argument: _hotel_CreateHotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  CreateHotel(argument: _hotel_CreateHotelRequest, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  createHotel(argument: _hotel_CreateHotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  createHotel(argument: _hotel_CreateHotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  createHotel(argument: _hotel_CreateHotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  createHotel(argument: _hotel_CreateHotelRequest, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  DeleteHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  DeleteHotel(argument: _auth_HotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  DeleteHotel(argument: _auth_HotelRequest, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  deleteHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  deleteHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  deleteHotel(argument: _auth_HotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  deleteHotel(argument: _auth_HotelRequest, callback: grpc.requestCallback<_auth_DeleteHotelResponse__Output>): grpc.ClientUnaryCall;
  
  FindHotelsByLocation(argument: _auth_FindHotelsByLocationRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  FindHotelsByLocation(argument: _auth_FindHotelsByLocationRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  findHotelsByLocation(argument: _auth_FindHotelsByLocationRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  findHotelsByLocation(argument: _auth_FindHotelsByLocationRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  
  GetHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  GetHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  GetHotel(argument: _auth_HotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  GetHotel(argument: _auth_HotelRequest, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  getHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  getHotel(argument: _auth_HotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  getHotel(argument: _auth_HotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  getHotel(argument: _auth_HotelRequest, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  
  GetHotels(argument: _auth_GetHotelsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  GetHotels(argument: _auth_GetHotelsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  getHotels(argument: _auth_GetHotelsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  getHotels(argument: _auth_GetHotelsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_hotel_Hotel__Output>;
  
  UpdateHotel(argument: _hotel_UpdateHotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  UpdateHotel(argument: _hotel_UpdateHotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  UpdateHotel(argument: _hotel_UpdateHotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  UpdateHotel(argument: _hotel_UpdateHotelRequest, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  updateHotel(argument: _hotel_UpdateHotelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  updateHotel(argument: _hotel_UpdateHotelRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  updateHotel(argument: _hotel_UpdateHotelRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  updateHotel(argument: _hotel_UpdateHotelRequest, callback: grpc.requestCallback<_hotel_HotelResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HotelServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateHotel: grpc.handleUnaryCall<_hotel_CreateHotelRequest__Output, _hotel_HotelResponse>;
  
  DeleteHotel: grpc.handleUnaryCall<_auth_HotelRequest__Output, _auth_DeleteHotelResponse>;
  
  FindHotelsByLocation: grpc.handleServerStreamingCall<_auth_FindHotelsByLocationRequest__Output, _hotel_Hotel>;
  
  GetHotel: grpc.handleUnaryCall<_auth_HotelRequest__Output, _hotel_HotelResponse>;
  
  GetHotels: grpc.handleServerStreamingCall<_auth_GetHotelsRequest__Output, _hotel_Hotel>;
  
  UpdateHotel: grpc.handleUnaryCall<_hotel_UpdateHotelRequest__Output, _hotel_HotelResponse>;
  
}

export interface HotelServiceDefinition extends grpc.ServiceDefinition {
  CreateHotel: MethodDefinition<_hotel_CreateHotelRequest, _hotel_HotelResponse, _hotel_CreateHotelRequest__Output, _hotel_HotelResponse__Output>
  DeleteHotel: MethodDefinition<_auth_HotelRequest, _auth_DeleteHotelResponse, _auth_HotelRequest__Output, _auth_DeleteHotelResponse__Output>
  FindHotelsByLocation: MethodDefinition<_auth_FindHotelsByLocationRequest, _hotel_Hotel, _auth_FindHotelsByLocationRequest__Output, _hotel_Hotel__Output>
  GetHotel: MethodDefinition<_auth_HotelRequest, _hotel_HotelResponse, _auth_HotelRequest__Output, _hotel_HotelResponse__Output>
  GetHotels: MethodDefinition<_auth_GetHotelsRequest, _hotel_Hotel, _auth_GetHotelsRequest__Output, _hotel_Hotel__Output>
  UpdateHotel: MethodDefinition<_hotel_UpdateHotelRequest, _hotel_HotelResponse, _hotel_UpdateHotelRequest__Output, _hotel_HotelResponse__Output>
}
