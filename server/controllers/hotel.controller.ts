import * as grpc from "@grpc/grpc-js";
import {
  createHotel,
  deleteHotel,
  findAllHotels,
  findHotel,
  findHotelByLocation,
  findUniqueHotel,
  updateHotel,
} from "../services/hotel.service";
import { HotelResponse } from "../../pb/hotel/HotelResponse";
import { CreateHotelRequest__Output } from "../../pb/hotel/CreateHotelRequest";
import { UpdateHotelRequest__Output } from "../../pb/hotel/UpdateHotelRequest";
import { HotelRequest__Output } from "../../pb/auth/HotelRequest";
import { DeleteHotelResponse } from "../../pb/auth/DeleteHotelResponse";
import { GetHotelsRequest__Output } from "../../pb/auth/GetHotelsRequest";
import { Hotel } from "../../pb/hotel/Hotel";
import { FindHotelsByLocationRequest__Output } from "../../pb/auth/FindHotelsByLocationRequest";

export const createHotelHandler = async (
  req: grpc.ServerUnaryCall<CreateHotelRequest__Output, HotelResponse>,
  res: grpc.sendUnaryData<HotelResponse>
) => {
  try {
    const hotel = await createHotel({
      name: req.request.name,
      maxcount: req.request.maxcount,
      phonenumber: req.request.phonenumber,
      rentperday: req.request.rentperday,
      imageurls: req.request.imageurls,
      currentbookings: req.request.currentbookings,
      type: req.request.type,
      description: req.request.description,
      location: req.request.location,
    });

    res(null, {
      hotel: {
        id: hotel.id,
        name: hotel.name,
        maxcount: hotel.maxcount,
        phonenumber: hotel.phonenumber,
        rentperday: hotel.rentperday,
        imageurls: hotel.imageurls,
        currentbookings: hotel.currentbookings,
        type: hotel.type,
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

export const UpdateHotelHandler = async (
  req: grpc.ServerUnaryCall<UpdateHotelRequest__Output, HotelResponse>,
  res: grpc.sendUnaryData<HotelResponse>
) => {
  try {
    const hotelExists = await findHotel({ id: req.request.id });

    if (!hotelExists) {
      res({
        code: grpc.status.NOT_FOUND,
        message: "No Hotel with that ID exists",
      });
      return;
    }
    const updatedHotel = await updateHotel(
      { id: req.request.id },
      {
        name: req.request.name,
        maxcount: req.request.maxcount,
        phonenumber: req.request.phonenumber,
        rentperday: req.request.rentperday,
        imageurls: req.request.imageurls,
        currentbookings: req.request.currentbookings,
        type: req.request.type,
        description: req.request.description,
        location: req.request.location,
      }
    );

    res(null, {
      hotel: {
        name: updatedHotel.name,
        maxcount: updatedHotel.maxcount,
        phonenumber: updatedHotel.phonenumber,
        rentperday: updatedHotel.rentperday,
        imageurls: updatedHotel.imageurls,
        currentbookings: updatedHotel.currentbookings,
        type: updatedHotel.type,
        description: updatedHotel.description,
        location: updatedHotel.location,
        created_at: {
          seconds: updatedHotel.createdAt.getTime() / 1000,
        },
        updated_at: {
          seconds: updatedHotel.updatedAt.getTime() / 1000,
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
        maxcount: hotel.maxcount,
        phonenumber: hotel.phonenumber,
        rentperday: hotel.rentperday,
        imageurls: hotel.imageurls,
        currentbookings: hotel.currentbookings,
        type: hotel.type,
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

export const deleteHotelHandler = async (
  req: grpc.ServerUnaryCall<HotelRequest__Output, DeleteHotelResponse>,
  res: grpc.sendUnaryData<DeleteHotelResponse>
) => {
  try {
    const hotelExists = await findHotel({ id: req.request.id });

    if (!hotelExists) {
      res({
        code: grpc.status.NOT_FOUND,
        message: "No Hotel with that ID exists",
      });
      return;
    }

    const hotel = await deleteHotel({ id: req.request.id });

    if (!hotel) {
      res({
        code: grpc.status.NOT_FOUND,
        message: "No Hotel with that ID exists",
      });
      return;
    }

    res(null, {
      success: true,
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
        maxcount: hotel.maxcount,
        phonenumber: hotel.phonenumber,
        rentperday: hotel.rentperday,
        imageurls: hotel.imageurls,
        currentbookings: hotel.currentbookings,
        type: hotel.type,
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

export const findHotelsByLocationHandler = async (
  call: grpc.ServerWritableStream<FindHotelsByLocationRequest__Output, Hotel>
) => {
  try {
    const { page, limit, location } = call.request;
    const hotels = await findHotelByLocation({
      page: parseInt(page),
      limit: parseInt(limit),
      location,
    });

    for (let i = 0; i < hotels.length; i++) {
      const hotel = hotels[i];
      call.write({
        id: hotel.id,
        name: hotel.name,
        maxcount: hotel.maxcount,
        phonenumber: hotel.phonenumber,
        rentperday: hotel.rentperday,
        imageurls: hotel.imageurls,
        currentbookings: hotel.currentbookings,
        type: hotel.type,
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
  