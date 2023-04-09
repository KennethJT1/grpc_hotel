// Original file: proto/hotel.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Hotel {
  'id'?: (string);
  'name'?: (string);
  'maxcount'?: (number);
  'phonenumber'?: (number);
  'rentperday'?: (number);
  'imageurls'?: (string)[];
  'currentbookings'?: (string)[];
  'type'?: (string);
  'description'?: (string);
  'location'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Hotel__Output {
  'id': (string);
  'name': (string);
  'maxcount': (number);
  'phonenumber': (number);
  'rentperday': (number);
  'imageurls': (string)[];
  'currentbookings': (string)[];
  'type': (string);
  'description': (string);
  'location': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
