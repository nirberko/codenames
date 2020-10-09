import mongoose from 'mongoose';

import CardDAO from "../dao/CardDAO";
import CategoryDAO from "../dao/CategoryDAO";

const cardSchema = new mongoose.Schema({
  [CardDAO.FIELDS.TEXT]: {
    type: String,
    required: true
  },
  [CardDAO.FIELDS.CATEGORY_ID]        : {
    type    : mongoose.Schema.Types.ObjectId,
    ref     : CategoryDAO.MODEL_NAME,
    required: true
  },
}, {
  timestamps: true,
  toJSON    : { virtuals: true },
  toObject  : { virtuals: true }
});

cardSchema.virtual(CardDAO.VIRTUAL_FIELDS.CATEGORY, {
  ref         : CategoryDAO.MODEL_NAME,
  localField  : CardDAO.FIELDS.CATEGORY_ID,
  foreignField: CategoryDAO.FIELDS.CATEGORY_ID,
  justOne     : true
});

export default mongoose.model(CardDAO.MODEL_NAME, cardSchema);