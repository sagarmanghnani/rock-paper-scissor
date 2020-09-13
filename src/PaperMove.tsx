
import { GameRules } from './GameRules'
export class PaperMove implements GameRules{
    type = 'Paper';
    isWonBy(type:string){
        if(type == 'Scissor'){
            return true;
        }return false;
    }
}