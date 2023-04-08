// Original file: proto/user.proto

import type { Role as _auth_Role, Role__Output as _auth_Role__Output } from '../auth/Role';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface User {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'name'?: (string);
  'role'?: (_auth_Role);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface User__Output {
  'id': (string);
  'email': (string);
  'password': (string);
  'name': (string);
  'role': (_auth_Role__Output);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
