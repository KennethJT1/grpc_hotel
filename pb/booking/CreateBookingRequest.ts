// Original file: proto/rpc_create_booking.proto


export interface CreateBookingRequest {
  'room'?: (string);
  'roomid'?: (string);
  'userid'?: (string);
  'fromdate'?: (string);
  'todate'?: (string);
  'totalamount'?: (number);
  'totaldays'?: (number);
  'transactionid'?: (string);
  'status'?: (string);
}

export interface CreateBookingRequest__Output {
  'room': (string);
  'roomid': (string);
  'userid': (string);
  'fromdate': (string);
  'todate': (string);
  'totalamount': (number);
  'totaldays': (number);
  'transactionid': (string);
  'status': (string);
}
