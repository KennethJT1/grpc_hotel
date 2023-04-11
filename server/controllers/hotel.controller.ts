import * as grpc from "@grpc/grpc-js";
import {
  createHotel,
  findAllHotels,
  findUniqueHotel,
} from "../services/hotel.service";
import { CreateHotelRequest__Output } from "../../pb/hotel/CreateHotelRequest";
import { HotelRequest__Output } from "../../pb/auth/HotelRequest";
import { GetHotelsRequest__Output } from "../../pb/auth/GetHotelsRequest";
import { Hotel } from "../../pb/hotel/Hotel";
import { HotelResponse } from "../../pb/hotel/HotelResponse";

export const createHotelHandler = async (
  req: grpc.ServerUnaryCall<CreateHotelRequest__Output, HotelResponse>,
  res: grpc.sendUnaryData<HotelResponse>
) => {
  try {
    const hotel = await createHotel({
      name: req.request.name,
      price: req.request.price,
      imageurl: req.request.imageurl,
      description: req.request.description,
      location: req.request.location,
    });

    res(null, {
      hotel: {
        id: hotel.id,
        name: hotel.name,
        price: hotel.price,
        imageurl: hotel.imageurl,
        description: hotel.description,
        location: hotel.location,
        created_at: {
          seconds: hotel.createdAt.getTime() / 1000,
        },
        updated_at: {
          seconds: hotel.updatedAt.getTime() / 1000,
        },
      },
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      res(
        {
          code: grpc.status.ALREADY_EXISTS,
          message: "Hotel with that name already exists",
        },
        null
      );
    } else {
      res(
        {
          code: grpc.status.INTERNAL,
          message: err.message,
        },
        null
      );
    }
  }
};

export const findHotelHandler = async (
  req: grpc.ServerUnaryCall<HotelRequest__Output, HotelResponse>,
  res: grpc.sendUnaryData<HotelResponse>
) => {
  try {
    const hotel = await findUniqueHotel({ id: req.request.id });

    if (!hotel) {
      res({
        code: grpc.status.NOT_FOUND,
        message: "No Hotel with that ID exists",
      });
      return;
    }

    res(null, {
      hotel: {
        id: hotel.id,
        name: hotel.name,
        price: hotel.price,
        imageurl: hotel.imageurl,
        description: hotel.description,
        location: hotel.location,
        created_at: {
          seconds: hotel.createdAt.getTime() / 1000,
        },
        updated_at: {
          seconds: hotel.updatedAt.getTime() / 1000,
        },
      },
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const findAllHotelsHandler = async (
  call: grpc.ServerWritableStream<GetHotelsRequest__Output, Hotel>
) => {
  try {
    const { page, limit } = call.request;
    const hotels = await findAllHotels({
      page: parseInt(page),
      limit: parseInt(limit),
    });

    for (let i = 0; i < hotels.length; i++) {
      const hotel = hotels[i];
      call.write({
        id: hotel.id,
        name: hotel.name,
        price: hotel.price,
        imageurl: hotel.imageurl,
        description: hotel.description,
        location: hotel.location,
        created_at: {
          seconds: hotel.createdAt.getTime() / 1000,
        },
        updated_at: {
          seconds: hotel.updatedAt.getTime() / 1000,
        },
      });
    }
    call.end();
  } catch (error: any) {
    console.log(error);
  }
};
  