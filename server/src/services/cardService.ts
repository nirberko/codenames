import CardDAO from "../dao/CardDAO";
import CardModel from '../models/CardModel';

const createCard = ({ category_id, text }: {
  category_id: string;
  text: string;
}) => new Promise(async (resolve, reject) => {
   try {
     const card = new CardModel({
       [CardDAO.FIELDS.TEXT]: text,
       [CardDAO.FIELDS.CATEGORY_ID]: category_id,
     })

     return await card.save()
   } catch (err) {
     console.log(err);
     reject(err);
   }
})