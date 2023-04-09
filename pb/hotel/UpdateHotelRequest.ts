// Original file: proto/rpc_update_hotel.proto


export interface UpdateHotelRequest {
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
  '_name'?: "name";
  '_maxcount'?: "maxcount";
  '_phonenumber'?: "phonenumber";
  '_rentperday'?: "rentperday";
  '_type'?: "type";
  '_description'?: "description";
  '_location'?: "location";
}

export interface UpdateHotelRequest__Output {
  'id': (string);
  'name'?: (string);
  'maxcount'?: (number);
  'phonenumber'?: (number);
  'rentperday'?: (number);
  'imageurls': (string)[];
  'currentbookings': (string)[];
  'type'?: (string);
  'description'?: (string);
  'location'?: (string);
  '_name': "name";
  '_maxcount': "maxcount";
  '_phonenumber': "phonenumber";
  '_rentperday': "rentperday";
  '_type': "type";
  '_description': "description";
  '_location': "location";
}
