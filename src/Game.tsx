import { Player } from "./Player";
import { Moves } from "./Move";


export abstract class Game {
    players!:Player[];
    abstract whichPlayerWon(move1:Moves, move2:Moves):any;
}