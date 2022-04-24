import { Router } from "express";

import { check_token } from "../utils/check_token";
const refreshRouter = Router();

refreshRouter.post("/refresh", async (req, res, next) => {
  const { refreshToken, accessToken } = req.body;
  const [a, b] = await check_token(accessToken, refreshToken);
});

export { refreshRouter };
