import { Cocktail } from "../schemas/cocktail";

class CocktailModel {
  static addCocktail = async addCocktailData => {
    const addCocktail = await Cocktail.create(addCocktailData);
    return addCocktail;
  };
  static findCocktail = async ({ name }) => {
    const findCocktail = await Cocktail.findOne({ name: name });
    return findCocktail;
  };
  static getPopulate = async ({ name }) => {
    const cocktail = await Cocktail.findOne({ name: name }).populate("rank");
    return cocktail;
  };

  static modify = async (filter, updateCocktailData) => {
    const option = { returnOriginal: false };
    const modifiedCocktail = await Cocktail.findByIdAndUpdate(filter, updateCocktailData, option);
    return modifiedCocktail;
  };

  static findCocktailList = async () => {
    const cocktailList = await Cocktail.find();
    return cocktailList;
  };
}

export { CocktailModel };
