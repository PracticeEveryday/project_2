import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const jwtkey = process.env.JWT_KEY;
const check_token = async (accessToken, refreshToken) => {
  try {
    const verifyAccess = jwt.verify(accessToken, jwtkey);
    const verifyRefresh = jwt.verify(refreshToken, jwtkey);
    return [verifyAccess, verifyRefresh];
  } catch (error) {
    throw new Error(error);
  }
};

export { check_token };
