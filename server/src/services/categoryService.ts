import CategoryDAO from "../dao/CategoryDAO";
import CategoryModel from '../models/CategoryModel';

export const createCategory = ({ name }: {
  name: string;
}) => new Promise(async (resolve, reject) => {
  try {
    return resolve(await CategoryModel.findOneAndUpdate({
      [CategoryDAO.FIELDS.NAME]: name,
    }, {
      [CategoryDAO.FIELDS.NAME]: name,
    }, {
      new: true,
      upsert: true
    }))
  } catch (err) {
    console.log(err);
    reject(err);
  }
})