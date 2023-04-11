// Original file: proto/rpc_create_hotel.proto


export interface CreateHotelRequest {
  'name'?: (string);
  'price'?: (number);
  'imageurl'?: (string);
  'description'?: (string);
  'location'?: (string);
}

export interface CreateHotelRequest__Output {
  'name': (string);
  'price': (number);
  'imageurl': (string);
  'description': (string);
  'location': (string);
}
