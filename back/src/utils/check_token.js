import jwt from "jsonwebtoken";

import { makeToken, makeRefreshToken } from "./makeToken";

import dotenv from "dotenv";
dotenv.config();

const jwtkey = process.env.JWT_KEY;

const checkAccessToken = async accessToken => {
  try {
    const decoded = jwt.verify(accessToken, jwtkey);
    return {
      status: "succ",
      decoded: { decoded: decoded.userId },
    };
  } catch (error) {
    return {
      status: "fail",
      message: error.message,
    };
  }
};

const checkRefreshToken = async refreshToken => {
  try {
    const decoded = jwt.verify(refreshToken, jwtkey);
    return {
      status: "succ",
      refreshToken,
    };
  } catch (error) {
    return {
      status: "fail",
      message: error.message,
    };
  }
};

export { checkAccessToken, checkRefreshToken };
