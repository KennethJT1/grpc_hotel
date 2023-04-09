// Original file: proto/booking.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Booking {
  'id'?: (string);
  'room'?: (string);
  'roomid'?: (string);
  'userid'?: (string);
  'fromdate'?: (string);
  'todate'?: (string);
  'totalamount'?: (number);
  'totaldays'?: (number);
  'transactionid'?: (string);
  'status'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Booking__Output {
  'id': (string);
  'room': (string);
  'roomid': (string);
  'userid': (string);
  'fromdate': (string);
  'todate': (string);
  'totalamount': (number);
  'totaldays': (number);
  'transactionid': (string);
  'status': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
