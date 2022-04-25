import { CocktailModel } from "../db";

class CocktailService {
  // db 조회
  static getCocktailInfo = async ({ name }) => {
    const cocktail = await CocktailModel.findCocktail({ name });
    if (!cocktail) {
      const errorMessage = "해당 칵테일 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return cocktail;
  };

  static getCocktailList = async () => {
    const cocktailList = await CocktailModel.findCocktailList();
    return cocktailList;
  };

  static getPopulate = async ({ name }) => {
    const cocktail = await CocktailModel.getPopulate({ name });
    return cocktail;
  };
}

export { CocktailService };
