import { z } from 'zod';

export const signupSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
    }),
    name: z.string({
      required_error: "Name is required",
    }),
    password: z.string({
      required_error: "Password is required",
    }),
    passwordConfirm: z.string({
      required_error: "PasswordConfirm is required",
    }),
  }),
});

export const signinSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
    }),
    password: z.string({
      required_error: "Password is required",
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

export type SignupInput = z.TypeOf<typeof signupSchema>["body"];
export type SigninInput = z.TypeOf<typeof signinSchema>["body"];
export type GetUserInput = z.TypeOf<typeof getUserSchema>["params"];
export type DeleteUserInput = z.TypeOf<typeof deleteUserSchema>['params'];