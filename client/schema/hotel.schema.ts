import { z } from "zod";

export const createHotelSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    maxcount: z
      .number({
        required_error: "Maxcount is required",
      })
      .int()
      .positive(),
    phonenumber: z
      .number({
        required_error: "Phonenumber is required",
      })
      .gte(10),
    rentperday: z
      .number({
        required_error: "Rentperday is required",
      })
      .int()
      .positive(),
    imageurls: z.array(
      z.string({
        required_error: "Imageurls is required",
      })
    ),
    currentbookings: z.array(
      z.string({
        required_error: "Currentbookings is required",
      })
    ),
    type: z.string({
      required_error: "Type is required",
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

export const updateHotelSchema = z.object({
  ...params,
  body: z
    .object({
      name: z.string().optional(),
      maxcount: z.number().int().positive().optional(),
      phonenumber: z.number().min(10).optional(),
      rentperday: z.number().int().positive().optional(),
      imageurls: z.array(z.string()).optional(),
      currentbookings: z.array(z.string()).optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      location: z.string().optional(),
    })
    .partial(),
});

export const deleteHotelSchema = z.object({
  ...params,
});

export type CreateHotelInput = z.TypeOf<typeof createHotelSchema>["body"];
export type GetHotelInput = z.TypeOf<typeof getHotelSchema>["params"];
export type UpdateHotelInput = z.TypeOf<typeof updateHotelSchema>;
export type DeleteHotelInput = z.TypeOf<typeof deleteHotelSchema>["params"];
