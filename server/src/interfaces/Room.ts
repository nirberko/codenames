import { Player } from "./Player";

export interface Room {
  players?: Map<string, Player>,
  started: boolean
}