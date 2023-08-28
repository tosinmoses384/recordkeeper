import { Users } from './users';

const url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL
  ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL
  : '';

export const users = new Users(url);
