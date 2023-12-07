import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SEC = process.env.JWT_SEC as string;

export const createToken = (payload: JwtPayload) => jwt.sign(payload, JWT_SEC);
