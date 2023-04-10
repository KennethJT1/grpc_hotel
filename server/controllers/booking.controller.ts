import * as grpc from "@grpc/grpc-js";
import { CreateBookingRequest__Output } from "../../pb/booking/CreateBookingRequest";
import { BookingResponse } from "../../pb/booking/BookingResponse";
import { cancelBooking, createBooking, findAllBookings, findBooking, findUniqueBooking } from "../services/booking.service";
import { BookingRequest__Output } from "../../pb/auth/BookingRequest";
import { GetBookingsRequest__Output } from "../../pb/auth/GetBookingsRequest";
import { Booking } from "@prisma/client";
import { CancelBookingResponse } from "../../pb/auth/CancelBookingResponse";

export const createBookingHandler = async (
  req: grpc.ServerUnaryCall<CreateBookingRequest__Output, BookingResponse>,
  res: grpc.sendUnaryData<BookingResponse>
) => {
  try {
    const booking = await createBooking({
      room: req.request.room,
      roomid: req.request.roomid,
      userid: req.request.userid,
      fromdate: req.request.fromdate,
      todate: req.request.todate,
      totalamount: req.request.totalamount,
      totaldays: req.request.totaldays,
      transactionid: req.request.transactionid,
      status: req.request.status,
    });

    res(null, {
      booking: {
        id: booking.id,
        room: booking.room,
        roomid: booking.roomid,
        userid: booking.userid,
        fromdate: booking.fromdate,
        todate: booking.todate,
        totalamount: booking.totalamount,
        totaldays: booking.totaldays,
        transactionid: booking.transactionid,
        status: booking.status,
        created_at: {
          seconds: booking.createdAt.getTime() / 1000,
        },
        updated_at: {
          seconds: booking.updatedAt.getTime() / 1000,
        },
      },
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      res(
        {
          code: grpc.status.ALREADY_EXISTS,
          message: "Booking already exists",
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

export const findBookingHandler = async (
  req: grpc.ServerUnaryCall<BookingRequest__Output, BookingResponse>,
  res: grpc.sendUnaryData<BookingResponse>
) => {
  try {
    const booking = await findUniqueBooking({ id: req.request.id });

    if (!booking) {
      res({
        code: grpc.status.NOT_FOUND,
        message: "No Booking with that ID exists",
      });
      return;
    }

    res(null, {
      booking: {
        id: booking.id,
        room: booking.room,
        roomid: booking.roomid,
        userid: booking.userid,
        fromdate: booking.fromdate,
        todate: booking.todate,
        totalamount: booking.totalamount,
        totaldays: booking.totaldays,
        transactionid: booking.transactionid,
        status: booking.status,
        created_at: {
          seconds: booking.createdAt.getTime() / 1000,
        },
        updated_at: {
          seconds: booking.updatedAt.getTime() / 1000,
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

export const cancelBookingHandler = async (
  req: grpc.ServerUnaryCall<BookingRequest__Output, CancelBookingResponse>,
  res: grpc.sendUnaryData<CancelBookingResponse>
) => {
  try {
    const bookingExists = await findBooking({ id: req.request.id });

    if (!bookingExists) {
      res({
        code: grpc.status.NOT_FOUND,
        message: "No Booking with that ID exists",
      });
      return;
    }

    const hotel = await cancelBooking({ id: req.request.id });

    if (!hotel) {
      res({
        code: grpc.status.NOT_FOUND,
        message: "No Booking with that ID exists",
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

export const findAllBookingsHandler = async (
  call: grpc.ServerWritableStream<GetBookingsRequest__Output, Booking>
) => {
  try {
    const { page, limit } = call.request;
    const bookings = await findAllBookings({
      page: parseInt(page),
      limit: parseInt(limit),
    });

    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      call.write({
        id: booking.id,
        room: booking.room,
        roomid: booking.roomid,
        userid: booking.userid,
        fromdate: booking.fromdate,
        todate: booking.todate,
        totalamount: booking.totalamount,
        totaldays: booking.totaldays,
        transactionid: booking.transactionid,
        status: booking.status,
        created_at: {
          seconds: booking.createdAt.getTime() / 1000,
        },
        updated_at: {
          seconds: booking.updatedAt.getTime() / 1000,
        },
      });
    }
    call.end();
  } catch (error: any) {
    console.log(error);
  }
};
