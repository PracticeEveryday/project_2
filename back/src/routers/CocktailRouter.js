import { Router } from "express";
import { CocktailService } from "../services/CocktailService";

const CocktailRouter = Router();

// 특정 칵테일 조회 API
CocktailRouter.get("/cocktail", async (req, res, next) => {
  try {
    const { name } = req.body;
    const cocktailInfo = await CocktailService.getCocktailInfo({
      name,
    });
    res.status(200).json(cocktailInfo);
  } catch (error) {
    next(error);
  }
});

// 칵테일 리스트 API
CocktailRouter.get("/cocktaillist", async (req, res, next) => {
  try {
    const CocktailList = await CocktailService.getCocktailList();
    res.status(200).json(CocktailList);
  } catch (error) {
    next(error);
  }
});
export { CocktailRouter };
