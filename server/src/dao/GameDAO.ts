export default {
  MODEL_NAME: 'Game',
  FIELDS: {
    GAME_ID: '_id',
    CARDS_ID: 'cards_id',
    BLUE_TEAM_CARDS_ID: 'blue_team_cards_id',
    RED_TEAM_CARDS_ID: 'red_team_cards_id',
  },
  VIRTUAL_FIELDS: {
    CARDS: 'cards',
    BLUE_TEAM_CARDS: 'blue_team_cards',
    RED_TEAM_CARDS: 'red_team_cards',
  }
};