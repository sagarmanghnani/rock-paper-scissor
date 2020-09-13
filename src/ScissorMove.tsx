
import { GameRules } from './GameRules'
export class ScissorMove implements GameRules{
    type = 'Scissor'
    isWonBy(type:string){
        if(type == 'Rock'){
            return true;
        }return false;
    }
}