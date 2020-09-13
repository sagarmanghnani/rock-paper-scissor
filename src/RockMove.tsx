
import { GameRules } from './GameRules'
export class RockMove implements GameRules{
    type = 'Rock'
    isWonBy(type:string){
        if(type == 'Paper'){
            return true;
        }return false;
    }
}