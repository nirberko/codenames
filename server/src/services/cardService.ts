import CardDAO from "../dao/CardDAO";
import CardModel from '../models/CardModel';

export const createCard = ({ category_id, text }: {
  category_id: string;
  text: string;
}) => new Promise(async (resolve, reject) => {
   try {
     return resolve(await CardModel.findOneAndUpdate({
       [CardDAO.FIELDS.TEXT]: text,
       [CardDAO.FIELDS.CATEGORY_ID]: category_id,
     }, {
       [CardDAO.FIELDS.TEXT]: text,
       [CardDAO.FIELDS.CATEGORY_ID]: category_id,
     }, {
       new: true,
       upsert: true
     }))
   } catch (err) {
     console.log(err);
     reject(err);
   }
})