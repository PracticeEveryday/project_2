import { Router } from "express";

import { check_token } from "../utils/check_token";
const refreshRouter = Router();

refreshRouter.post("/refresh", async (req, res, next) => {
  const { refreshToken, accessToken } = req.body;
  console.log(refreshToken, accessToken);
  //const [a, b] = check_token(accessToken, refreshToken);
  //console.log(a, b);
});

export { refreshRouter };
