export interface GameRules {
    type:string;
    isWonBy(type:string):boolean;
        
}