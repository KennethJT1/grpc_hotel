import * as grpc from '@grpc/grpc-js';
import customConfig from '../server/config/default';
import { proto } from "./client";
import express, { Request, Response } from "express"
import morgan from 'morgan';
import cors from "cors";
import validate from "./middleware/validate";
import {
  SigninInput,
  SignupInput,
  signinSchema,
  signupSchema,
} from "./schema/user.schema";
import { Hotel, User } from "@prisma/client";
import { CreateHotelInput, GetHotelInput } from "./schema/hotel.schema";

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

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

//signup
app.post(
  "/api/users/signup",
  validate(signupSchema),
  async (req: Request<{}, {}, SignupInput>, res: Response) => {
    const { name, email, password } = req.body;
    client.SignUpUser(
      {
        name,
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
          data,
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

//Get all users
app.get("/api/users", async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 10;
  const page = parseInt(req.query.page as string) || 1;
  const users: User[] = [];

  const stream = client.GetUsers({ page, limit });
  stream.on("data", (data: User) => {
    users.push(data);
  });

  stream.on("end", () => {
    console.log("🙌 Communication ended");
    res.status(200).json({
      status: "success",
      results: users.length,
      users,
    });
  });

  stream.on("error", (err) => {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  });
});

//create hotel
app.post(
  "/api/hotels",
  // validate(createHotelSchema),
  async (req: Request<{}, {}, CreateHotelInput>, res: Response) => {
    const { name, price, imageurl, description, location } = req.body;
    client_hotel.CreateHotel(
      {
        name,
        price,
        imageurl,
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

const port = customConfig.CLIENT_PORT;
app.listen(port, ()=>{
  console.log("🚀 Express client started successfully on port: "+ port)
})