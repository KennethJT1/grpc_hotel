// Original file: proto/rpc_create_hotel.proto


export interface CreateHotelRequest {
  'name'?: (string);
  'maxcount'?: (number);
  'phonenumber'?: (number);
  'rentperday'?: (number);
  'imageurls'?: (string)[];
  'currentbookings'?: (string)[];
  'type'?: (string);
  'description'?: (string);
  'location'?: (string);
}

export interface CreateHotelRequest__Output {
  'name': (string);
  'maxcount': (number);
  'phonenumber': (number);
  'rentperday': (number);
  'imageurls': (string)[];
  'currentbookings': (string)[];
  'type': (string);
  'description': (string);
  'location': (string);
}
