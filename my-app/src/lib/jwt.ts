import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const JWT_SEC = process.env.JWT_SEC as string;

export const createToken = (payload: JwtPayload) => jwt.sign(payload, JWT_SEC);

export const readPayload = (token: string) => jwt.verify(token, JWT_SEC);

export const readPayloadJose = async <T>(token: string) => {
  const secret = new TextEncoder().encode(JWT_SEC);
  const { payload } = await jose.jwtVerify<T>(token, secret);

  return payload;
};
