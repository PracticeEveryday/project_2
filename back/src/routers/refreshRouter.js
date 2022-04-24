import { Router } from "express";
import { checkAccessToken, checkRefreshToken } from "../utils/check_token";

const refreshRouter = Router();

refreshRouter.post("/refresh", async (req, res, next) => {
  let { refreshToken, accessToken } = req.body;
  accessToken = await checkAccessToken(accessToken);
  refreshToken = await checkRefreshToken(refreshToken);
  console.log(accessToken, refreshToken);
});

export { refreshRouter };
