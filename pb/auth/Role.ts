// Original file: proto/user.proto

export const Role = {
  USER: 'USER',
  ADMIN: 'ADMIN',
} as const;

export type Role =
  | 'USER'
  | 0
  | 'ADMIN'
  | 1

export type Role__Output = typeof Role[keyof typeof Role]
