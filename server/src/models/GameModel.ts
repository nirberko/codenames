import * as mongoose from 'mongoose';

import GameDAO from "../dao/GameDAO";
import CardDAO from "../dao/CardDAO";

const gameSchema = new mongoose.Schema({
  [GameDAO.FIELDS.CARDS_ID]: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: CardDAO.MODEL_NAME,
    required: true
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

gameSchema.virtual(GameDAO.VIRTUAL_FIELDS.CARDS, {
  ref         : CardDAO.MODEL_NAME,
  localField  : GameDAO.FIELDS.CARDS_ID,
  foreignField: CardDAO.FIELDS.CARD_ID
});

export default mongoose.model(GameDAO.MODEL_NAME, gameSchema);