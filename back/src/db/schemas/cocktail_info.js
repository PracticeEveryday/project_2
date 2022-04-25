import { Schema, model } from "mongoose";

const CocktailInfoSchema = new Schema({
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
  },
  flaovr: {
    type: [String],
  },
  comment: {
    type: String,
  },
  alcohol: {
    type: Boolean,
  },
  rank: {
    type: Boolean,
  },
});

const CocktailInfo = model("CocktailInfo", CocktailInfoSchema);

export { CocktailInfo };
