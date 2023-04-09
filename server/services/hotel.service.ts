import { Prisma, Hotel } from "@prisma/client";
import { prisma } from "../database/prisma";

export const createHotel = async (input: Prisma.HotelCreateInput) => {
  return (await prisma.hotel.create({
    data: input,
  })) as Hotel;
};

export const findHotel = async (
  where: Partial<Prisma.HotelWhereInput>,
  select?: Prisma.HotelSelect
) => {
  return (await prisma.hotel.findFirst({
    where,
    select,
  })) as Hotel;
};

export const findUniqueHotel = async (
  where: Prisma.HotelWhereUniqueInput,
  select?: Prisma.HotelSelect
) => {
  return (await prisma.hotel.findUnique({
    where,
    select,
  })) as Hotel;
};

export const findAllHotels = async ({
  page,
  limit,
  select,
}: {
  page: number;
  limit: number;
  select?: Prisma.HotelSelect;
}) => {
  const take = limit || 10;
  const skip = (page - 1) * limit;
  return (await prisma.hotel.findMany({
    select,
    skip,
    take,
  })) as Hotel[];
};

export const updateHotel = async (
  where: Partial<Prisma.HotelWhereUniqueInput>,
  data: Prisma.HotelUpdateInput,
  select?: Prisma.HotelSelect
) => {
  return (await prisma.hotel.update({ where, data, select })) as Hotel;
};

export const deleteHotel = async (where: Prisma.HotelWhereUniqueInput) => {
  return await prisma.hotel.delete({ where });
};
