import CardModel from '../models/CardModel';
import GameModel from "../models/GameModel";
import GameDAO from "../dao/GameDAO";

export const getGameById = (_id) => new Promise(async (resolve, reject) => {
  try {
    return resolve(await GameModel.findOne({ _id }).populate(GameDAO.VIRTUAL_FIELDS.CARDS))
  } catch (err) {
    console.log(err);
    reject(err);
  }
})

export const createGame = () => new Promise(async (resolve, reject) => {
  try {
    const cards = await CardModel.randomCards(4 * 4);
    const game = new GameModel({
      [GameDAO.FIELDS.CARDS_ID]: cards.map(({ _id }) => _id),
    })
    return resolve(game.save())
  } catch (err) {
    console.log(err);
    reject(err);
  }
})