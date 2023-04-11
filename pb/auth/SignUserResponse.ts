// Original file: proto/rpc_signup_user.proto

import type { User as _auth_User, User__Output as _auth_User__Output } from '../auth/User';

export interface SignUserResponse {
  'user'?: (_auth_User | null);
  'token'?: (string);
}

export interface SignUserResponse__Output {
  'user': (_auth_User__Output | null);
  'token': (string);
}
