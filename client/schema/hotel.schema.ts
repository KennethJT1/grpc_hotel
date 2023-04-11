import { z } from "zod";

export const createHotelSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    price: z
      .number({
        required_error: "Price is required",
      })
      .int()
      .positive(),
    imageurl: z.string({
      required_error: "Imageurls is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    location: z.string({
      required_error: "Location is required",
    }),
  }),
});

const params = {
  params: z.object({
    hotelId: z.string(),
  }),
};

export const getHotelSchema = z.object({
  ...params,
});

export type CreateHotelInput = z.TypeOf<typeof createHotelSchema>["body"];
export type GetHotelInput = z.TypeOf<typeof getHotelSchema>["params"];
