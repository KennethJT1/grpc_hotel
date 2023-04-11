// Original file: proto/services.proto

import type { Long } from '@grpc/proto-loader';

export interface GetUsersRequest {
  'page'?: (number | string | Long);
  'limit'?: (number | string | Long);
}

export interface GetUsersRequest__Output {
  'page': (string);
  'limit': (string);
}
