import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_KEY = process.env.JWT_KEY;
const makeToken = Object => {
  const token = jwt.sign(Object, JWT_KEY, { expiresIn: "24h" });
  return token;
};

const makeRefreshToken = () => {
  const refreshToken = jwt.sign({}, JWT_KEY, { expiresIn: "14d" });
  return refreshToken;
};

export { makeToken, makeRefreshToken };
