import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers["authorization"]) {
      res.status(401).json({
        status: "fail",
        message: "token이 없습니다",
      });
    } else {
      const JWT_KEY = process.env.JWT_KEY;
      const token = req.headers["authorization"].split(" ")[1];
      const decoded = jwt.verify(token, JWT_KEY);
      req.user = decoded.userId;
      next();
    }
  } catch (error) {
    console.log(error.message);
    if (error.message === "jwt expired") {
      res.status(401).json({
        status: "fail",
        message: "accessToken이 만료 되었습니다. 재발급 받아 오세요",
        error,
      });
    } else {
      res.status(401).json({
        status: "fail",
        message: "token이 변형되었습니다. ",
      });
      next(error);
    }
  }
};

export { verifyToken };
