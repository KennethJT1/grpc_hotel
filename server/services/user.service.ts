import { Prisma, User } from '@prisma/client';
import { prisma } from "../database/prisma";

export const createUser = async (input: Prisma.UserCreateInput) => {
  return (await prisma.user.create({
    data: input,
  })) as User;
};

export const findUser = async (
  where: Partial<Prisma.UserCreateInput>,
  select?: Prisma.UserSelect
) => {
  return (await prisma.user.findFirst({
    where,
    select,
  })) as User;
};

export const findUniqueUser = async (
  where: Prisma.UserWhereUniqueInput,
  select?: Prisma.UserSelect
) => {
  return (await prisma.user.findUnique({
    where,
    select,
  })) as User;
};

export const findAllUsers = async ({
  page,
  limit,
  select,
}: {
  page: number;
  limit: number;
  select?: Prisma.UserSelect;
}) => {
  const take = limit || 10;
  const skip = (page - 1) * limit;
  return (await prisma.user.findMany({
    select,
    skip,
    take,
  })) as User[];
};
