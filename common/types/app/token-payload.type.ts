import { JwtPayload } from 'jsonwebtoken';

type TokenPayload = {
  userId: string;
  login: string;
} & JwtPayload;

export type { TokenPayload };
