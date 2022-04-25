import { Schema, model } from "mongoose";

const CocktailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: [String],
  },
  imageUrl: {
    type: String,
  },
  rank: {
    type: Schema.Types.ObjectId,
    ref: "Rank",
    default: false,
  },
  flavor: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const Cocktail = model("Cocktail", CocktailSchema);

export { Cocktail };
