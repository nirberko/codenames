import CardModel from '../models/CardModel';
import GameModel from "../models/GameModel";
import GameDAO from "../dao/GameDAO";

export const getGameById = (_id) => new Promise(async (resolve, reject) => {
  try {
    return resolve(
      {
        ...await GameModel.findOne({ _id })
          .populate(GameDAO.VIRTUAL_FIELDS.CARDS).lean(),
        [GameDAO.FIELDS.RED_TEAM_CARDS_ID]: undefined,
        [GameDAO.FIELDS.BLUE_TEAM_CARDS_ID]: undefined
      }
    )
  } catch (err) {
    console.log(err);
    reject(err);
  }
})

const randomArray = (length, maxNumber): number[] => {
  let randomRows: number[] = [];

  while (randomRows.length < length) {
    const randomNumber = Math.floor(Math.random() * maxNumber);

    if (!randomRows.includes(randomNumber)) randomRows.push(randomNumber);
  }

  return randomRows;
}

export const createGame = () => new Promise(async (resolve, reject) => {
  const CARDS_PER_TEAM = 8;

  try {
    const cards = await CardModel.randomCards(5 * 5);

    const blueCards = randomArray(CARDS_PER_TEAM, cards.length)
      .map(index => cards[index]);

    let filteredCards = cards.filter((card) =>
      !blueCards.find(({ _id }) => card._id === _id)
    );

    const redCards = randomArray(CARDS_PER_TEAM, filteredCards.length)
      .map(index => filteredCards[index])

    const game = new GameModel({
      [GameDAO.FIELDS.CARDS_ID]: cards.map(({ _id }) => _id),
      [GameDAO.FIELDS.BLUE_TEAM_CARDS_ID]: blueCards.map(({ _id }) => _id),
      [GameDAO.FIELDS.RED_TEAM_CARDS_ID]: redCards.map(({ _id }) => _id),
    })
    return resolve(game.save())
  } catch (err) {
    console.log(err);
    reject(err);
  }
})