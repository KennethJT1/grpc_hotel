import * as grpc from '@grpc/grpc-js';
import customConfig from '../server/config/default';
import { proto } from "./client";
import express, { Request, Response } from "express"
import morgan from 'morgan';
import validate from './middleware/validate';
import {
  SigninInput,
  SignupInput,
  signinSchema,
  signupSchema,
} from "./schema/user.schema";
import { Booking, Hotel, User } from "@prisma/client";
import {
  CreateHotelInput,
  DeleteHotelInput,
  GetHotelInput,
  UpdateHotelInput,
  createHotelSchema,
  updateHotelSchema,
} from "./schema/hotel.schema";
import {
  CreateBookingInput,
  GetBookingInput,
  createBookingSchema,
} from "./schema/booking.schema";

//USER
const client = new proto.auth.AuthService(
  `0.0.0.0:${customConfig.port}`,
  grpc.credentials.createInsecure()
);
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);
client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  console.log("🚀 gRPC Client is ready");
}

//HOTEL
const client_hotel = new proto.auth.HotelService(
  `0.0.0.0:${customConfig.port}`,
  grpc.credentials.createInsecure()
);
const deadline_hotel = new Date();
deadline_hotel.setSeconds(deadline_hotel.getSeconds() + 1);
client_hotel.waitForReady(deadline_hotel, (err: any) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReadyHotel();
});

function onClientReadyHotel() {
  console.log("🚀 gRPC Hotel Client is ready");
}

//Booking
const client_booking = new proto.auth.BookingService(
  `0.0.0.0:${customConfig.port}`,
  grpc.credentials.createInsecure()
);
const deadline_booking = new Date();
deadline_booking.setSeconds(deadline_booking.getSeconds() + 1);
client_booking.waitForReady(deadline_booking, (err: any) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReadyBooking();
});

function onClientReadyBooking() {
  console.log("🚀 gRPC Booking Client is ready");
}

const app = express();
app.use(express.json());
app.use(morgan("dev"));

/* ========================================= USER ROUTES=================================================== */
//signup
app.post(
  "/api/users/signup",
  validate(signupSchema),
  async (req: Request<{}, {}, SignupInput>, res: Response) => {
    const { name, email, password, passwordConfirm } = req.body;
    client.SignUpUser(
      {
        name,
        email,
        password,
        passwordConfirm,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(201).json({
          status: "success",
          user: data,
        });
      }
    );
  }
);

//Signin
app.post(
  "/api/users/signin",
  validate(signinSchema),
  async (req: Request<{}, {}, SigninInput>, res: Response) => {
    const { email, password } = req.body;
    client.SignInUser(
      {
        email,
        password,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(201).json({
          status: "success",
          user: data,
        });
      }
    );
  }
);

/* ========================================= Hotel ROUTES=================================================== */
//cretae hotel
app.post(
  "/api/hotels",
  validate(createHotelSchema),
  async (req: Request<{}, {}, CreateHotelInput>, res: Response) => {
    const {
      name,
      maxcount,
      phonenumber,
      rentperday,
      imageurls,
      currentbookings,
      type,
      description,
      location,
    } = req.body;
    client_hotel.CreateHotel(
      {
        name,
        maxcount,
        phonenumber,
        rentperday,
        imageurls,
        currentbookings,
        type,
        description,
        location,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(201).json({
          status: "success",
          hotel: data,
        });
      }
    );
  }
);

//update hotel
app.patch(
  "/api/hotels/:hotelId",
  validate(updateHotelSchema),
  async (
    req: Request<UpdateHotelInput["params"], {}, UpdateHotelInput["body"]>,
    res: Response
  ) => {
    const {
      name,
      maxcount,
      phonenumber,
      rentperday,
      imageurls,
      currentbookings,
      type,
      description,
      location,
    } = req.body;
    client_hotel.UpdateHotel(
      {
        id: req.params.hotelId,
        name,
        maxcount,
        phonenumber,
        rentperday,
        imageurls,
        currentbookings,
        type,
        description,
        location,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(200).json({
          status: "success",
          hotel: data,
        });
      }
    );
  }
);

//get single hotel
app.get(
  "/api/hotels/:hotelId",
  async (req: Request<GetHotelInput>, res: Response) => {
    client_hotel.GetHotel(
      {
        id: req.params.hotelId,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(200).json({
          status: "success",
          data,
        });
      }
    );
  }
);

//delete an hotel
app.delete(
  "/api/hotels/:hotelId",
  async (req: Request<DeleteHotelInput>, res: Response) => {
    client_hotel.DeleteHotel(
      {
        id: req.params.hotelId,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(204).json({
          status: "success",
          data: null,
        });
      }
    );
  }
);

//Get all hotels
app.get("/api/hotels", async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 10;
  const page = parseInt(req.query.page as string) || 1;
  const hotels: Hotel[] = [];

  const stream = client_hotel.GetHotels({ page, limit });
  stream.on("data", (data: Hotel) => {
    hotels.push(data);
  });

  stream.on("end", () => {
    console.log("🙌 Communication ended");
    res.status(200).json({
      status: "success",
      results: hotels.length,
      hotels,
    });
  });

  stream.on("error", (err) => {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  });
});

/* ========================================= USER ROUTES=================================================== */

//Book a room
app.post(
  "/api/bookings",
  validate(createBookingSchema),
  async (req: Request<{}, {}, CreateBookingInput>, res: Response) => {
    const {
      room,
      roomid,
      userid,
      fromdate,
      todate,
      totalamount,
      totaldays,
      transactionid,
    } = req.body;
    client_booking.CreateBooking(
      {
        room,
        roomid,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        transactionid,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(201).json({
          status: "success",
          hotel: data,
        });
      }
    );
  }
);

//Get a booked room by id
app.get(
  "/api/bookings/:bookingId",
  async (req: Request<GetBookingInput>, res: Response) => {
    client_booking.GetBooking(
      {
        id: req.params.bookingId,
      },
      (err, data) => {
        if (err) {
          return res.status(400).json({
            status: "fail",
            message: err.message,
          });
        }
        return res.status(200).json({
          status: "success",
          data,
        });
      }
    );
  }
);

//cancel abooked room
// app.delete(
//   "/api/bookings/:bookingId",
//   async (req: Request<CancelBookingInput>, res: Response) => {
//     client_booking.CancelBooking(
//       {
//         id: req.params.bookingId,
//       },
//       (err, data) => {
//         if (err) {
//           return res.status(400).json({
//             status: "fail",
//             message: err.message,
//           });
//         }
//         return res.status(204).json({
//           status: "success",
//           data: null,
//         });
//       }
//     );
//   }
// );

// get all booked room
app.get("/api/bookings", async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 10;
  const page = parseInt(req.query.page as string) || 1;
  const bookings: Booking[] = [];

  const stream = client_booking.GetBookings({ page, limit });
  stream.on("data", (data: Booking) => {
    bookings.push(data);
  });

  stream.on("end", () => {
    console.log("🙌 Communication ended");
    res.status(200).json({
      status: "success",
      results: bookings.length,
      bookings,
    });
  });

  stream.on("error", (err) => {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  });
});


const port = 8080
app.listen(port, ()=>{
  console.log("🚀 Express client started successfully on port: "+ port)
})