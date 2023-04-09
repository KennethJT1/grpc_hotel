// Original file: proto/services.proto

import type { Long } from '@grpc/proto-loader';

export interface GetHotelsRequest {
  'page'?: (number | string | Long);
  'limit'?: (number | string | Long);
}

export interface GetHotelsRequest__Output {
  'page': (string);
  'limit': (string);
}
