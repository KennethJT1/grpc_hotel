import { z } from "zod";

export const createBookingSchema = z.object({
  body: z.object({
    room: z.string({
      required_error: "Room is required",
    }),
    roomid: z.string({
      required_error: "Room Id is required",
    }),
    userid: z.string({
      required_error: "User Id is required",
    }),
    fromdate: z.string({
      required_error: "Fromdate is required",
    }),
    todate: z.string({
      required_error: "Todate is required",
    }),
    totalamount: z.number({
      required_error: "Total amount is required",
    }),
    totaldays: z
      .number({
        required_error: "Total days is required",
      })
      .int()
      .positive(),
    transactionid: z.string({
      required_error: "TransactionId is required",
    }),
    status: z.string({
      required_error: "Status is required",
    }),
  }),
});

const params = {
  params: z.object({
    bookingId: z.string(),
  }),
};

export const getBookingSchema = z.object({
  ...params,
});

export const cancelBookingSchema = z.object({
  ...params,
});

export type CreateBookingInput = z.TypeOf<typeof createBookingSchema>["body"];
export type GetBookingInput = z.TypeOf<typeof getBookingSchema>["params"];
export type CancelBookingInput = z.TypeOf<typeof cancelBookingSchema>["params"];
