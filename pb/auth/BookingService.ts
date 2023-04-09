// Original file: proto/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Booking as _booking_Booking, Booking__Output as _booking_Booking__Output } from '../booking/Booking';
import type { BookingRequest as _auth_BookingRequest, BookingRequest__Output as _auth_BookingRequest__Output } from '../auth/BookingRequest';
import type { BookingResponse as _booking_BookingResponse, BookingResponse__Output as _booking_BookingResponse__Output } from '../booking/BookingResponse';
import type { CancelBookingResponse as _auth_CancelBookingResponse, CancelBookingResponse__Output as _auth_CancelBookingResponse__Output } from '../auth/CancelBookingResponse';
import type { CreateBookingRequest as _booking_CreateBookingRequest, CreateBookingRequest__Output as _booking_CreateBookingRequest__Output } from '../booking/CreateBookingRequest';
import type { GetBookingsRequest as _auth_GetBookingsRequest, GetBookingsRequest__Output as _auth_GetBookingsRequest__Output } from '../auth/GetBookingsRequest';

export interface BookingServiceClient extends grpc.Client {
  CancelBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  CancelBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  CancelBooking(argument: _auth_BookingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  CancelBooking(argument: _auth_BookingRequest, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  cancelBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  cancelBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  cancelBooking(argument: _auth_BookingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  cancelBooking(argument: _auth_BookingRequest, callback: grpc.requestCallback<_auth_CancelBookingResponse__Output>): grpc.ClientUnaryCall;
  
  CreateBooking(argument: _booking_CreateBookingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  CreateBooking(argument: _booking_CreateBookingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  CreateBooking(argument: _booking_CreateBookingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  CreateBooking(argument: _booking_CreateBookingRequest, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  createBooking(argument: _booking_CreateBookingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  createBooking(argument: _booking_CreateBookingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  createBooking(argument: _booking_CreateBookingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  createBooking(argument: _booking_CreateBookingRequest, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  
  GetBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  GetBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  GetBooking(argument: _auth_BookingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  GetBooking(argument: _auth_BookingRequest, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  getBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  getBooking(argument: _auth_BookingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  getBooking(argument: _auth_BookingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  getBooking(argument: _auth_BookingRequest, callback: grpc.requestCallback<_booking_BookingResponse__Output>): grpc.ClientUnaryCall;
  
  GetBookings(argument: _auth_GetBookingsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_booking_Booking__Output>;
  GetBookings(argument: _auth_GetBookingsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_booking_Booking__Output>;
  getBookings(argument: _auth_GetBookingsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_booking_Booking__Output>;
  getBookings(argument: _auth_GetBookingsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_booking_Booking__Output>;
  
}

export interface BookingServiceHandlers extends grpc.UntypedServiceImplementation {
  CancelBooking: grpc.handleUnaryCall<_auth_BookingRequest__Output, _auth_CancelBookingResponse>;
  
  CreateBooking: grpc.handleUnaryCall<_booking_CreateBookingRequest__Output, _booking_BookingResponse>;
  
  GetBooking: grpc.handleUnaryCall<_auth_BookingRequest__Output, _booking_BookingResponse>;
  
  GetBookings: grpc.handleServerStreamingCall<_auth_GetBookingsRequest__Output, _booking_Booking>;
  
}

export interface BookingServiceDefinition extends grpc.ServiceDefinition {
  CancelBooking: MethodDefinition<_auth_BookingRequest, _auth_CancelBookingResponse, _auth_BookingRequest__Output, _auth_CancelBookingResponse__Output>
  CreateBooking: MethodDefinition<_booking_CreateBookingRequest, _booking_BookingResponse, _booking_CreateBookingRequest__Output, _booking_BookingResponse__Output>
  GetBooking: MethodDefinition<_auth_BookingRequest, _booking_BookingResponse, _auth_BookingRequest__Output, _booking_BookingResponse__Output>
  GetBookings: MethodDefinition<_auth_GetBookingsRequest, _booking_Booking, _auth_GetBookingsRequest__Output, _booking_Booking__Output>
}
