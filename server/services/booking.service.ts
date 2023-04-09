import { Prisma, Booking } from "@prisma/client";
import { prisma } from "../database/prisma";

export const createBooking = async (input: Prisma.BookingCreateInput) => {
  return (await prisma.booking.create({
    data: input,
  })) as Booking;
};

export const findBooking = async (
  where: Partial<Prisma.BookingWhereInput>,
  select?: Prisma.BookingSelect
) => {
  return (await prisma.booking.findFirst({
    where,
    select,
  })) as Booking;
};

export const findUniqueBooking = async (
  where: Prisma.BookingWhereUniqueInput,
  select?: Prisma.BookingSelect
) => {
  return (await prisma.booking.findUnique({
    where,
    select,
  })) as Booking;
};

export const findAllBookings = async ({
  page,
  limit,
  select,
}: {
  page: number;
  limit: number;
  select?: Prisma.BookingSelect;
}) => {
  const take = limit || 10;
  const skip = (page - 1) * limit;
  return (await prisma.booking.findMany({
    select,
    skip,
    take,
  })) as Booking[];
};

export const cancelBooking = async (where: Prisma.HotelWhereUniqueInput) => {
  return await prisma.hotel.delete({ where });
};
