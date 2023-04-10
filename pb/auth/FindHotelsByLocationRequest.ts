// Original file: proto/services.proto

import type { Long } from '@grpc/proto-loader';

export interface FindHotelsByLocationRequest {
  'page'?: (number | string | Long);
  'limit'?: (number | string | Long);
  'location'?: (string);
}

export interface FindHotelsByLocationRequest__Output {
  'page': (string);
  'limit': (string);
  'location': (string);
}
