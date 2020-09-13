import { Game } from "./Game";
import { Moves } from "./Move";

export class RockPaperScissor extends Game {
    whichPlayerWon(move1:Moves, move2:Moves):any{
        if(move1.playerMove.isWonBy(move2.playerMove.type)){
            return [move2.player];
        }else if(move2.playerMove.isWonBy(move1.playerMove.type)){
            return [move1.player];
        }else{
            return [move1.player, move2.player];
        }
    }
}