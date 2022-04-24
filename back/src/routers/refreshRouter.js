import { Router } from "express";
import { checkAccessToken, checkRefreshToken } from "../utils/check_token";
import { makeToken } from "../utils/makeToken";

const refreshRouter = Router();

refreshRouter.post("/refresh", async (req, res, next) => {
  let { refreshToken, accessToken } = req.body;
  accessToken = await checkAccessToken(accessToken);
  refreshToken = await checkRefreshToken(refreshToken);
  console.log(accessToken);
  if (accessToken.status === "succ" && refreshToken.status === "succ") {
    // accessToken, refreshToken 모두 유효함
    accessToken = makeToken(accessToken);
    res.status(200).json({
      status: "succ",
      message: "accessToken 시간이 갱신되었습니다.",
      accessToken,
      refreshToken: refreshToken.refreshToken,
    });
  } else if (accessToken.status === "fail" && refreshToken.status === "succ") {
    // accessToken 만료, refreshToken 유효
    accessToken = makeToken(accessToken);
    res.status(200).json({
      status: "succ",
      message: "accessToken을 재발급 하였습니다..",
      accessToken,
      refreshToken: refreshToken.refreshToken,
    });
  } else if (accessToken.status === "fail" && refreshToken.status === "fail") {
    // accessToken 만료, refreshToken 만료
    res.status(200).json({
      status: "succ",
      message: "token이 모두 만료 되었습니다. 다시 로그인 해주세요",
    });
  }
});

export { refreshRouter };
