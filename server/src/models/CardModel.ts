import mongoose, { Document, Model } from 'mongoose';

import CardDAO from "../dao/CardDAO";
import CategoryDAO from "../dao/CategoryDAO";

interface ICardDocument extends Document {
  text: string;
  category_id: string;
}

export interface ICardModel extends Model<ICardDocument> {
  randomCards: (count: number) => Promise<ICardDocument[]>
}

const cardSchema = new mongoose.Schema({
  [CardDAO.FIELDS.TEXT]: {
    type: String,
    required: true
  },
  [CardDAO.FIELDS.CATEGORY_ID]: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CategoryDAO.MODEL_NAME,
    required: true
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

cardSchema.statics.randomCards = function (length){
  return new Promise(async (resolve, reject) => {
    try {
      const count = await this.countDocuments();

      let randomRows: number[] = [];

      while (randomRows.length < (count < length ? count : length)) {
        const randomNumber = Math.floor(Math.random() * count);

        if (!randomRows.includes(randomNumber)) randomRows.push(randomNumber);
      }

      return resolve(Promise.all(randomRows.map(async (rowNumber) =>
        await this.findOne().skip(rowNumber).lean()
      )))
    } catch (err) {
      reject(err);
      console.log(err);
    }
  })
}

const cardModel: ICardModel = mongoose.model<ICardDocument, ICardModel>(CardDAO.MODEL_NAME, cardSchema);

export default cardModel;