import * as mongoose from 'mongoose';

import CategoryDAO from "../dao/CategoryDAO";

const categorySchema = new mongoose.Schema({
  [CategoryDAO.FIELDS.NAME]: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model(CategoryDAO.MODEL_NAME, categorySchema);