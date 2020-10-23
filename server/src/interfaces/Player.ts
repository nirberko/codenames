export enum Team {
  BLUE = 'Blue',
  RED = 'Red'
}

export interface Player {
  issued: string;
  username: string;
  team: Team
}