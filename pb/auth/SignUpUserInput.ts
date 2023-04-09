// Original file: proto/rpc_signup_user.proto


export interface SignUpUserInput {
  'name'?: (string);
  'email'?: (string);
  'password'?: (string);
  'passwordConfirm'?: (string);
  'role'?: (string);
}

export interface SignUpUserInput__Output {
  'name': (string);
  'email': (string);
  'password': (string);
  'passwordConfirm': (string);
  'role': (string);
}
