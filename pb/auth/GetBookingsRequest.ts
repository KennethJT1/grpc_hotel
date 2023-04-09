// Original file: proto/services.proto

import type { Long } from '@grpc/proto-loader';

export interface GetBookingsRequest {
  'page'?: (number | string | Long);
  'limit'?: (number | string | Long);
}

export interface GetBookingsRequest__Output {
  'page': (string);
  'limit': (string);
}
