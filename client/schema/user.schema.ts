import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    name: z.string({
      required_error: 'Name is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    passwordConfirm: z.string({
      required_error: 'PasswordConfirm is required',
    }),
  }),
});

const params = {
  params: z.object({
    UserId: z.string(),
  }),
};

export const getUserSchema = z.object({
  ...params,
});

export const updateUserSchema = z.object({
  ...params,
  body: z
    .object({
      title: z.string(),
      content: z.string(),
      category: z.string(),
      published: z.boolean(),
      image: z.string(),
    })
    .partial(),
});

export const deleteUserSchema = z.object({
  ...params,
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>['body'];
export type GetUserInput = z.TypeOf<typeof getUserSchema>['params'];
export type UpdateUserInput = z.TypeOf<typeof updateUserSchema>;
export type DeleteUserInput = z.TypeOf<typeof deleteUserSchema>['params'];