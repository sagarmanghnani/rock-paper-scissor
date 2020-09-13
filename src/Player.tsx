export abstract class Player {
    name!:string;
    id!:number;
    wins!:number;
    lose!:number;
    draws!:number;
    abstract makeMove():any;
}